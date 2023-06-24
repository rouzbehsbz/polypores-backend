import {get} from 'env-var';

class HttpConfig {
    static readonly HOST = get('HTTP_HOST')
        .required()
        .default('localhost')
        .asString()

    static readonly PORT = get('HTTP_PORT')
        .required()
        .default(3000)
        .asPortNumber()
}

export default HttpConfig;