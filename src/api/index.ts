// GET /threads
interface Thread {
  id: string;
  title: string;
}

// GET /threads/:threadId/posts
interface ThreadResponse {
  threadId: string;
  posts: {
    id: string;
    post: string;
  }[];
}

// API通信用クラス
class APIClient {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.headers = { 'Content-Type': 'application/json' };
  }

  // GETリクエスト
  // 余裕あればオプション受け付けるようにするかも
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error(`GETエラー: ${response.status}`);
    return response.json();
  }

  // POSTリクエスト
  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`POSTエラー: ${response.status}`);
    return response.json();
  }
}

// 各種API
export class API {
  private static instance: API;
  private client: APIClient;

  private constructor() {
    this.client = new APIClient('https://railway.bulletinboard.techtrain.dev');
  }

  // インスタンスが1つになるように
  static getInstance(): API {
    if (!this.instance) {
      this.instance = new API();
    }
    return this.instance;
  }

  // スレッド一覧取得
  async getThreads(offset?: string): Promise<Thread[]> {
    const option = offset ? `?offset=${offset}` : '';
    return this.client.get(`/threads${option}`);
  }

  // スレッド作成
  async createThread(title: string): Promise<Thread> {
    return this.client.post('/threads', { title });
  }

  // スレッド内レス取得
  async getThreadPosts(threadId: string, offset: string): Promise<ThreadResponse> {
    return this.client.get(`/threads/${threadId}/posts?offset=${offset}`);
  }

  // レス作成
  async createPost(threadId: string, post: string): Promise<{ id: string; threadId: string; post: string }> {
    return this.client.post(`/threads/${threadId}/posts`, { post });
  }
}

export const api = API.getInstance();