var assert = require('assert'),
	main   = require('../main');


	describe('Main', function (){
		describe(".dogNames()", function () {
		it('returns the names of dogs', function (){
				var input= [
					{name:'fido'},
					{name: 'snoopy'}
				];
				var expected = ['fido','snoopy'];
				var acutal = main.dogNames(input);
				assert.deepEqual(expected, acutal);
				});
		it('returns an empty array if no input', function (){
			var expected = [];
			var actual = main.dogNames();
			assert.deepEqual(expected, actual);
		});
		});
		describe(".dogSize()", function (){
			it("it returns only small dogs", function (){
				var input= [
				{name:'fido', size: 'small'},
				{name: 'snoopy', size: 'medium'},
				{name:'clifford', size:'large'},
				];
				var expected = [{name: 'fido', size:'small'}];
				var actual = main.dogSize(input);
				assert.deepEqual(expected, actual);
			});
			it("it returns only medium dogs" function (){
			var input= [
				{name:'fido', size: 'small'},
				{name: 'snoopy', size: 'medium'},
				{name:'clifford', size:'large'},
				];
				var expected = [{name: 'snoopy', size:'medium'}];
				var actual = main.dogSize(input);
				assert.deepEqual(expected, actual);
				});
			it("it returns only large dogs" function(){
			var input= [
				{name:'fido', size: 'small'},
				{name: 'snoopy', size: 'medium'},
				{name:'clifford', size:'large'},
				];
				var expected = [{name: 'clifford', size:'large'}];
				var actual = main.dogSize(input);
				assert.deepEqual(expected, actual);
				});
		});
	});
	});