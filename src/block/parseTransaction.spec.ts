import { Address, Cell } from "..";
import { parseTransaction } from "./parseTransaction";

describe('parseTransaction', () => {
    it('should parse transaction correctly', () => {

        // Source: https://explorer.toncoin.org/transaction?account=EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N&lt=22901965000001&hash=E9FB666FD65E2D70479C5A2C2EC412AD08D68FCDF57676B3BAA34AADA3C95DB8
        const address = Address.parse('0:83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8');
        const tx = 'te6cckECCgEAAlMAA7V4Pf1VLmNym0cvy8yMRevMZpFwJVi2jsdSfhukA6DzGoAAAU1Ed9DUFmPJqTvOirSq2SKzYQ5GyQgvd9+38bqLQeGJ8YYrkwEwAAFNRGeacBYYzLegADRpVFhoAQIDAgHgBAUAgnKs+GZiNansGUYB+rKGLa25KuWgzm0WaeC5p+NLonoeFBg7+If0w+KZtCRH5Mx+9HCC8Pihk1IvrTPyRowEaTRLAg8MQMYZbXqEQAgJAd+IAQe/qqXMblNo5fl5kYi9eYzSLgSrFtHY6k/DdIB0HmNQB3H/g30bYqz72JAcnKJjRhgkmca92JLgIBGap3csfDt4Jk4S1186lCTQKuGZLHb97aw106oJRO8jslWF11AnUCFNTRi7DGZdIAAAAIAcBgEB3wcAdEIACasmTDZcDR+1HcxuZZBHXmDDvLMcX2Eijok8WCLyCyEwSMJzlQAAAAAAAAAAAAAAAAAAAAAAAAAAvUgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1EABNWTJhsuBo/ajuY3MsgjrzBh3lmOL7CRR0SeLBF5BZCYJGE5yoAABhRYYAAAKaiO+hqEwxmW9AAAAABAAJ1BdkMTiAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAG/Jh6EgTBRYQAAAAAAAAgAAAAAAA4SB9Dp1g8lBEAkVf+gygVyC7sUl7wdSG9SEX3iBd2MqQFAXjC98i7E=';
        const cell = Cell.fromBoc(Buffer.from(tx, 'base64'))[0];
        const parsedTx = parseTransaction(address.workChain, cell.beginParse());
        console.warn(parsedTx);
    });
    it('should parse tick/tock transactions', () => {
        // Source: https://explorer.toncoin.org/transaction?account=Ef80UXx731GHxVr0-LYf3DIViMerdo3uJLAG3ykQZFjXz2kW&lt=23019612000003&hash=36c7dbbb0cc6bf250e1265064c6c85751f8c838bea7caa58a9e62db03ea5d004
        const tx = 'te6cckECBgEAATIAA69zRRfHvfUYfFWvT4th/cMhWIx6t2je4ksAbfKRBkWNfPAAAU76vLzwNWZ7xZALK0LgKzOhLytPsuTA0xeefgUOOoutURmfnnowAAFO+ry88BYZJ8ZwABQIAQIDAAEgAIJylqTCiKw1AYPxh8CsC3VDbY7yFlU0TmTCts3A0+5em+JY4alwBNV+0DtCbXo8QiEQ9DmV3wfpinUd6ThveMbXjwIFMDA0BAUAnkJmTmJaAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaWAAAACWAAAABAAGAAAAAAAFGa6E8XuPiyICapdf9V8asZ/eSnaHRNIXjfpju1M+EHpAkCa8Fcsu4Q==';
        const cell = Cell.fromBoc(Buffer.from(tx, 'base64'))[0];
        const parsedTx = parseTransaction(-1, cell.beginParse());
        console.warn(parsedTx);
    });
});