describe('Boling', function() {
    beforeEach(function() {
      boling = new Boling();
    });

	//it('All Gater total 0', function() {
	//	expect(boling.total()).toEqual(0);
	//});

	it('function 01', function() {
        array = [0,0,0,0,0,0,0,0,0,0];
		expect(boling.total(array)).toEqual(0);
	});

	it('All 1 pin total 20', function() {
        array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		expect(boling.total(array)).toEqual(20);
	});
});

