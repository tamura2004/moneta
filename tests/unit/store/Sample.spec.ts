import Sample from '@/models/Sample';

function partial({cat}: any) {
  return cat;
}

describe('Sample.ts', () => {

  describe('initialize', () => {
    const subject = new Sample();

    test('x', () => {
      expect(subject.x).toBe(1);
    });

    test('y', () => {
      expect(subject.y).toBe(1);
    });

    test('label', () => {
      expect(subject.label).toBe('label');
    });
  });

  describe('distance', () => {
    const a = new Sample(4, 3);
    const b = new Sample();

    expect(a.distance(b)).toBe(4);
  });
});
