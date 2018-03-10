// 1.常量
// ES5
{
	Object.defineProperty(window,"PI2",{
		value: 3.1415926,
		writable: false
	})
	console.log(PI2)
}
// ES6
{
	const PI = 3.1415926
	console.log(PI)
}

// 2.作用域
// es5
{
	var callbacks = []
	for (var i = 0;i <= 2;i++) {
		callbacks[i] = function () {
			return i * 2
		}
	}

	console.table([
		callbacks[0](),
		callbacks[1](),
		callbacks[2]()
	])
}

// es6
{
	const callbacks2 = []
	for (let i = 0;i <= 2;i++) {
		callbacks2[i] = function() {
			return i * 2
		}
	}

	console.table([
		callbacks2[0](),
		callbacks2[1](),
		callbacks2[2]()
	])
}


// 3.箭头函数
// es5
{
	var events = [1,2,3,4,5];
	var odds = events.map(function(v) {
		return v + 1;
	})

	console.log(events,odds);
}
// es6
{
	let events = [1,2,3,4,5];
	let odds = events.map(v => v + 1);

	console.log(events,odds);
}

// es5
{
	var factory = function() {
		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: function(){
				return this.a; // a+
			} 
		}
	}

	console.log(new factory().c.b());
}

// es6 
{
	let factory = function(){
		this.a = 'a';
		this.b = 'b';
		this.c = {
			a: 'a+',
			b: () => {
				return this.a;
			}
		}
	}

	console.log(new factory().c.b());
}

// 4.默认参数
{
	function f(x,y = 1,z = 2) {
		return x + y + z;
	}

	console.log(f(1)); 
}