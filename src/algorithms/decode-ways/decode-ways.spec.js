const expect = require('expect');
const decodeWays = require('./decode-ways');

describe('decode ways checks', () => {
  it('should handle invalid checks', () => {
    expect(decodeWays.decodeWays(undefined)).toEqual(0);
    expect(decodeWays.decodeWays(null)).toEqual(0);
    expect(decodeWays.decodeWays('')).toEqual(0);
  });
  describe('decode ways functionality checks', () => {
    it('should handle regular scenario', () => {
      expect(decodeWays.decodeWays('123456')).toEqual(3);
    });
    it('should handle no other possibility scenario', () => {
      expect(decodeWays.decodeWays('9889788586')).toEqual(1);
    });
    it('should handle fork scenarios', () => {
      expect(decodeWays.decodeWays('111')).toEqual(3);
    });
    it('should handle leading zeros', () => {
      expect(decodeWays.decodeWays('0111')).toEqual(3);
    });
    it('should handle only zeros', () => {
      expect(decodeWays.decodeWays('00')).toEqual(0);
    });
    it('should handle trailing zeros', () => {
      expect(decodeWays.decodeWays('1110')).toEqual(2);
    });
    it('should handle zeros in the middle', () => {
      expect(decodeWays.decodeWays('2101')).toEqual(1);
    });
    it('should handle unable to decode scenarios', () => {
      expect(decodeWays.decodeWays('10011')).toEqual(0);
    });
    it('should handle larger string', () => {
      // expect(decodeWays.decodeWays('111111')).toEqual(0);
      // expect(decodeWays.decodeWays('111111111111111111111111111111111111111111111')).toEqual(0);
    });
  });
});
