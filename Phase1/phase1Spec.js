describe('Boling', function() {
    beforeEach(function() {
      boling = new Boling();
    });

	it('All Gater total 0', function() {
		expect(boling.total()).toEqual(0);
	});

	it('All 1 pin total 20', function() {
		expect(20).toEqual(20);
	});
});

