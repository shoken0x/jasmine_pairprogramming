describe('Sample01', function() {
	it('First Test expect true', function() {
		var a = 3;
		var b = 3;
		expect(a+b).toEqual(6);
	});

	it('Second Test expect failed', function() {
		var a = 3;
		var b = 3;
        //expect test failed
		expect(a+b).toEqual(7);
	});
});
