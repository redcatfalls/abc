export class MediaPolyfill {
  constructor(src) {
    return new (Audio || MediaMock)(src);
  }
}

/**
 * Mockery class for Media object
 */
class MediaMock {
  constructor(...args) {}
  
  play(): any {}
  
  pause(): any {}
  
  stop(): any {}

}
