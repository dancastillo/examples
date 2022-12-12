import { readFileSync } from 'fs';
import { asyncCall, asyncCallFailed, catchErr, catchErr2, catchErr3, catchErrMessage } from '../example';

describe('example', () => {

  it('should return a value from asyncCall', async () => {
    const result = await asyncCall();
    expect(result).toBe('this works as expected');
  });

  it('should throw error', async () => {
    expect(async () => await asyncCallFailed()).rejects.toThrowError('this DID NOT work');
  });

  it('should catch error and return error message', async () => {
    const errMessage = await catchErrMessage();
    expect(errMessage).toBe('Error has been caught and reported');
  });
});

describe('catchErr', () => {
  it('1', async () => {
    const bool = await catchErr();
    expect(bool).toBe(true);
  });

  it('2', async () => {
    const bool = await catchErr2();
    expect(bool).toBe(true);
  });

  it('3', () => {
    const bool = catchErr3();
    expect(bool).toBe(true);
  });
});

// describe('Error', () => {
//   it('an error must be of instance Error', () => {
//     try {
//       readFileSync('some file that does not exist');
//     } catch (err) {
//       expect(err).toBeInstanceOf(Error);
//     }
//   });
// });
