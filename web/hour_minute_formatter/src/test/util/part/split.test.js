import { split } from '../../../util/part';

test('t t => target: t', () => {
	expect(split('t', 't')).toStrictEqual({ prefix: null, target: 't', suffix: null });
});

test('at t => prefix: a, target: t', () => {
	expect(split('at', 't')).toStrictEqual({ prefix: 'a', target: 't', suffix: null });
});

test('tb t => target: t, suffix: b', () => {
	expect(split('tb', 't')).toStrictEqual({ prefix: null, target: 't', suffix: 'b' });
});

test('atb t => prefix: a, target: t, suffix: b', () => {
	expect(split('atb', 't')).toStrictEqual({ prefix: 'a', target: 't', suffix: 'b' });
});
