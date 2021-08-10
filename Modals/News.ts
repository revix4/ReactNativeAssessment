export interface Articles {
    'title': string,
    'description': string,
    'urlToImage': string,
    'url': string,
};

export interface News {
    'status': string,
    'totalResults': number,
    'articles': Articles[],
};

