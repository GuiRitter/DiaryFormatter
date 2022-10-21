import { splitByPart } from '../../../util/string';

test('target falsy => return input', () => {
	expect(splitByPart('a', null)).toStrictEqual(['a']);
});

test('target empty => return input', () => {
	expect(splitByPart('a', '')).toStrictEqual(['a']);
});

test('input falsy => return input', () => {
	expect(splitByPart(null, 'a')).toStrictEqual([null]);
});

test('input not a string => return input', () => {
	expect(splitByPart(1, 'a')).toStrictEqual([1]);
});

test('target not in input => return input', () => {
	expect(splitByPart('b', 'a')).toStrictEqual(['b']);
});

test('target = input => return input', () => {
	expect(splitByPart('a', 'a')).toStrictEqual(['a']);
});

test('input has prefix => return prefix, input', () => {
	expect(splitByPart('ab', 'b')).toStrictEqual(['a', 'b']);
});

test('input has suffix => return input, suffix', () => {
	expect(splitByPart('ab', 'a')).toStrictEqual(['a', 'b']);
});

test('input has prefix and suffix => return prefix, input, suffix', () => {
	expect(splitByPart('abc', 'b')).toStrictEqual(['a', 'b', 'c']);
});
