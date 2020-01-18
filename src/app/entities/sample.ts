export class Post {
    title: string
    content: string
    cre_dt: Date
    status: string
    statusName: string
    username: string
    commentCnt: number
}

export class Posts {
    results: Post[];
}