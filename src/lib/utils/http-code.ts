import { error } from '@sveltejs/kit';

type DefaultErrors = {
  code: string;
  message: string;
  description: string;
  spec: { title: string; ref: string };
};

const HTTP_STATUS: DefaultErrors[] = [
  {
    code: '101',
    message: 'Informational',
    description:
      '"indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response." ~ [sure](http://www.urbandictionary.com/define.php?term=sure)',
    spec: {
      title: 'RFC7231#6.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.2',
    },
  },
  {
    code: '100',
    message: 'Continue',
    description:
      '"indicates that the initial part of a request has been received and has not yet been rejected by the server."',
    spec: {
      title: 'RFC7231#6.2.1',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.2.1',
    },
  },
  {
    code: '101',
    message: 'Switching Protocols',
    description:
      '"indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection."',
    spec: {
      title: 'RFC7231#6.2.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.2.2',
    },
  },
  {
    code: '201',
    message: 'Successful',
    description:
      '"indicates that the client\'s request was successfully received, understood, and accepted." ~ [cool](https://twitter.com/DanaDanger/status/183316183494311936)',
    spec: {
      title: 'RFC7231#6.3',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3',
    },
  },
  {
    code: '200',
    message: 'OK',
    description: '"indicates that the request has succeeded."',
    spec: {
      title: 'RFC7231#6.3.1',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.1',
    },
  },
  {
    code: '201',
    message: 'Created',
    description:
      '"indicates that the request has been fulfilled and has resulted in one or more new resources being created."',
    spec: {
      title: 'RFC7231#6.3.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.2',
    },
  },
  {
    code: '202',
    message: 'Accepted',
    description:
      '"indicates that the request has been accepted for processing, but the processing has not been completed."',
    spec: {
      title: 'RFC7231#6.3.3',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.3',
    },
  },
  {
    code: '203',
    message: 'Non-Authoritative Information',
    description:
      '"indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy."',
    spec: {
      title: 'RFC7231#6.3.4',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.4',
    },
  },
  {
    code: '204',
    message: 'No Content',
    description:
      '"indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',
    spec: {
      title: 'RFC7231#6.3.5',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.5',
    },
  },
  {
    code: '205',
    message: 'Reset Content',
    description:
      '"indicates that the server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',
    spec: {
      title: 'RFC7231#6.3.6',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.3.6',
    },
  },
  {
    code: '206',
    message: 'Partial Content',
    description:
      '"indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field."',
    spec: {
      title: 'RFC7233#4.1',
      ref: 'https://tools.ietf.org/html/rfc7233#section-4.1',
    },
  },
  {
    code: '301',
    message: 'Redirection',
    description:
      '"indicates that further action needs to be taken by the user agent in order to fulfill the request." ~ [ask that dude over there](https://twitter.com/DanaDanger/status/183316183494311936)',
    spec: {
      title: 'RFC7231#6.4',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4',
    },
  },
  {
    code: '300',
    message: 'Multiple Choices',
    description:
      '"indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',
    spec: {
      title: 'RFC7231#6.4.1',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.1',
    },
  },
  {
    code: '301',
    message: 'Moved Permanently',
    description:
      '"indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',
    spec: {
      title: 'RFC7231#6.4.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.2',
    },
  },
  {
    code: '302',
    message: 'Found',
    description:
      '"indicates that the target resource resides temporarily under a different URI."',
    spec: {
      title: 'RFC7231#6.4.3',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.3',
    },
  },
  {
    code: '303',
    message: 'See Other',
    description:
      '"indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',
    spec: {
      title: 'RFC7231#6.4.4',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.4',
    },
  },
  {
    code: '304',
    message: 'Not Modified',
    description:
      '"indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',
    spec: {
      title: 'RFC7232#4.1',
      ref: 'https://tools.ietf.org/html/rfc7232#section-4.1',
    },
  },
  {
    code: '305',
    message: 'Use Proxy',
    description: '*deprecated*',
    spec: {
      title: 'RFC7231#6.4.5',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.5',
    },
  },
  {
    code: '307',
    message: 'Temporary Redirect',
    description:
      '"indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',
    spec: {
      title: 'RFC7231#6.4.7',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.4.7',
    },
  },
  {
    code: '401',
    message: 'Client Error',
    description:
      '"indicates that the client seems to have erred." ~ [*you* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)',
    spec: {
      title: 'RFC7231#6.5',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5',
    },
  },
  {
    code: '400',
    message: 'Bad Request',
    description:
      '"indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',
    spec: {
      title: 'RFC7231#6.5.1',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.1',
    },
  },
  {
    code: '401',
    message: 'Unauthorized',
    description:
      '"indicates that the request has not been applied because it lacks valid authentication credentials for the target resource."',
    spec: {
      title: 'RFC7235#6.3.1',
      ref: 'https://tools.ietf.org/html/rfc7235#section-3.1',
    },
  },
  {
    code: '402',
    message: 'Payment Required',
    description: '*reserved*',
    spec: {
      title: 'RFC7231#6.5.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.2',
    },
  },
  {
    code: '403',
    message: 'Forbidden',
    description:
      '"indicates that the server understood the request but refuses to authorize it."',
    spec: {
      title: 'RFC7231#6.5.3',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.3',
    },
  },
  {
    code: '404',
    message: 'Not Found',
    description:
      '"indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',
    spec: {
      title: 'RFC7231#6.5.4',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.4',
    },
  },
  {
    code: '405',
    message: 'Method Not Allowed',
    description:
      '"indicates that the method specified in the request-line is known by the origin server but not supported by the target resource."',
    spec: {
      title: 'RFC7231#6.5.5',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.5',
    },
  },
  {
    code: '406',
    message: 'Not Acceptable',
    description:
      '"indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',
    spec: {
      title: 'RFC7231#6.5.6',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.6',
    },
  },
  {
    code: '407',
    message: 'Proxy Authentication Required',
    description:
      '"is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy."',
    spec: {
      title: 'RFC7235#3.2',
      ref: 'https://tools.ietf.org/html/rfc7235#section-3.2',
    },
  },
  {
    code: '408',
    message: 'Request Timeout',
    description:
      '"indicates that the server did not receive a complete request message within the time that it was prepared to wait."',
    spec: {
      title: 'RFC7231#6.5.7',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.7',
    },
  },
  {
    code: '409',
    message: 'Conflict',
    description:
      '"indicates that the request could not be completed due to a conflict with the current state of the resource."',
    spec: {
      title: 'RFC7231#6.5.8',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.8',
    },
  },
  {
    code: '410',
    message: 'Gone',
    description:
      '"indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',
    spec: {
      title: 'RFC7231#6.5.9',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.9',
    },
  },
  {
    code: '411',
    message: 'Length Required',
    description:
      '"indicates that the server refuses to accept the request without a defined Content-Length."',
    spec: {
      title: 'RFC7231#6.5.10',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.10',
    },
  },
  {
    code: '412',
    message: 'Precondition Failed',
    description:
      '"indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server."',
    spec: {
      title: 'RFC7232#4.2',
      ref: 'https://tools.ietf.org/html/rfc7232#section-4.2',
    },
  },
  {
    code: '413',
    message: 'Payload Too Large',
    description:
      '"indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process."',
    spec: {
      title: 'RFC7231#6.5.11',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.11',
    },
  },
  {
    code: '414',
    message: 'URI Too Long',
    description:
      '"indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret."',
    spec: {
      title: 'RFC7231#6.5.12',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.12',
    },
  },
  {
    code: '415',
    message: 'Unsupported Media Type',
    description:
      '"indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',
    spec: {
      title: 'RFC7231#6.5.13',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.13',
    },
  },
  {
    code: '416',
    message: 'Range Not Satisfiable',
    description:
      '"indicates that none of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."',
    spec: {
      title: 'RFC7233#4.4',
      ref: 'https://tools.ietf.org/html/rfc7233#section-4.4',
    },
  },
  {
    code: '417',
    message: 'Expectation Failed',
    description:
      '"indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers."',
    spec: {
      title: 'RFC7231#6.5.14',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.14',
    },
  },
  {
    code: '418',
    message: "I'm a teapot",
    description:
      '"Any attempt to brew coffee with a teapot should result in the error code 418 I\'m a teapot."',
    spec: {
      title: 'RFC2324#2.3.1',
      ref: 'https://tools.ietf.org/html/rfc2324#section-2.3.1',
    },
  },
  {
    code: '426',
    message: 'Upgrade Required',
    description:
      '"indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',
    spec: {
      title: 'RFC7231#6.5.15',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.5.15',
    },
  },
  {
    code: '501',
    message: 'Server Error',
    description:
      '"indicates that the server is aware that it has erred or is incapable of performing the requested method." ~ [*we* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)',
    spec: {
      title: 'RFC7231#6.6',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6',
    },
  },
  {
    code: '500',
    message: 'Internal Server Error',
    description:
      '"indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."',
    spec: {
      title: 'RFC7231#6.6.1',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.1',
    },
  },
  {
    code: '501',
    message: 'Not Implemented',
    description:
      '"indicates that the server does not support the functionality required to fulfill the request."',
    spec: {
      title: 'RFC7231#6.6.2',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.2',
    },
  },
  {
    code: '502',
    message: 'Bad Gateway',
    description:
      '"indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',
    spec: {
      title: 'RFC7231#6.6.3',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.3',
    },
  },
  {
    code: '503',
    message: 'Service Unavailable',
    description:
      '"indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',
    spec: {
      title: 'RFC7231#6.6.4',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.4',
    },
  },
  {
    code: '504',
    message: 'Gateway Time-out',
    description:
      '"indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',
    spec: {
      title: 'RFC7231#6.6.5',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.5',
    },
  },
  {
    code: '505',
    message: 'HTTP Version Not Supported',
    description:
      '"indicates that the server does not support, or refuses to support, the protocol version that was used in the request message."',
    spec: {
      title: 'RFC7231#6.6.6',
      ref: 'https://tools.ietf.org/html/rfc7231#section-6.6.6',
    },
  },
  {
    code: '102',
    message: 'Processing',
    description:
      '"is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it."',
    spec: {
      title: 'RFC5218#10.1',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.1',
    },
  },
  {
    code: '207',
    message: 'Multi-Status',
    description: '"provides status for multiple independent operations."',
    spec: {
      title: 'RFC5218#10.2',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.2',
    },
  },
  {
    code: '226',
    message: 'IM Used',
    description:
      '"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',
    spec: {
      title: 'RFC3229#10.4.1',
      ref: 'https://tools.ietf.org/html/rfc3229#section-10.4.1',
    },
  },
  {
    code: '308',
    message: 'Permanent Redirect',
    description:
      '"The target resource has been assigned a new permanent URI and any future references to this resource outght to use one of the enclosed URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',
    spec: { title: 'RFC7538', ref: 'https://tools.ietf.org/html/rfc7538' },
  },
  {
    code: '422',
    message: 'Unprocessable Entity',
    description:
      '"means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',
    spec: {
      title: 'RFC5218#10.3',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.3',
    },
  },
  {
    code: '423',
    message: 'Locked',
    description:
      '"means the source or destination resource of a method is locked."',
    spec: {
      title: 'RFC5218#10.4',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.4',
    },
  },
  {
    code: '424',
    message: 'Failed Dependency',
    description:
      '"means that the method could not be performed on the resource because the requested action depended on another action and that action failed."',
    spec: {
      title: 'RFC5218#10.5',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.5',
    },
  },
  {
    code: '428',
    message: 'Precondition Required',
    description:
      '"indicates that the origin server requires the request to be conditional."',
    spec: {
      title: 'RFC6585#3',
      ref: 'https://tools.ietf.org/html/rfc6585#section-3',
    },
  },
  {
    code: '429',
    message: 'Too Many Requests',
    description:
      '"indicates that the user has sent too many requests in a given amount of time ("rate limiting")."',
    spec: {
      title: 'RFC6585#4',
      ref: 'https://tools.ietf.org/html/rfc6585#section-4',
    },
  },
  {
    code: '431',
    message: 'Request Header Fields Too Large',
    description:
      '"indicates that the server is unwilling to process the request because its header fields are too large."',
    spec: {
      title: 'RFC6585#5',
      ref: 'https://tools.ietf.org/html/rfc6585#section-5',
    },
  },
  {
    code: '451',
    message: 'Unavailable For Legal Reasons',
    description:
      '"This status code indicates that the server is denying access to the resource in response to a legal demand."',
    spec: {
      title: 'draft-ietf-httpbis-legally-restricted-status',
      ref: 'https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status',
    },
  },
  {
    code: '506',
    message: 'Variant Also Negotiates',
    description:
      '"indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',
    spec: {
      title: 'RFC2295#8.1',
      ref: 'https://tools.ietf.org/html/rfc2295#section-8.1',
    },
  },
  {
    code: '507',
    message: 'Insufficient Storage',
    description:
      '"means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',
    spec: {
      title: 'RFC5218#10.6',
      ref: 'https://tools.ietf.org/html/rfc2518#section-10.6',
    },
  },
  {
    code: '511',
    message: 'Network Authentication Required',
    description:
      '"indicates that the client needs to authenticate to gain network access."',
    spec: {
      title: 'RFC6585#6',
      ref: 'https://tools.ietf.org/html/rfc6585#section-6',
    },
  },
  {
    code: '701',
    message: 'Developer Error',
    description: '[err](http://www.urbandictionary.com/define.php?term=err)',
    spec: { title: '7xx-rfc', ref: 'http://documentup.com/joho/7XX-rfc' },
  },
];

export class HttpException {
  code: string;
  message: string;
  description: string;
  spec: { title: string; ref: string };

  constructor(code: string) {
    const status = HTTP_STATUS.find((status) => status.code == code);
    this.code = status?.code as string;
    this.message = status?.message as string;
    this.description = status?.description as string;
    this.spec = status?.spec as never;

    return error(
      Number(this.code ?? 500),
      this.message ?? 'Internal Server Error'
    );
  }
}
