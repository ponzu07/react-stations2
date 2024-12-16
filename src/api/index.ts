// 新しく出るコード
// ・スタックトレース取得用にErrorオブジェクト作成
// ・ジェネリック型(T)

// 型定義ゾーン
// GET /threads
interface Thread {
  id: string;
  title: string;
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

  // 非同期thread型-thread取得
  async getThreads(offset?: string): Promise<Thread[]> {
    const option = offset ? `?offset=${offset}` : '';
    return this.client.get(`/threads${option}`);
  }

  // 非同期thread型-thread作成
  async createThread(title: string): Promise<Thread> {
    return this.client.post('/threads', { title });
  }
}

export const api = API.getInstance();