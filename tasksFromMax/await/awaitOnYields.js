'use strict';
export default function awaitOnYields(generatorToProcess) {
	const generator = generatorToProcess();
	function handler(result){
		if (result.done) {
			return Promise.resolve(result.value);
		}
		return Promise.resolve(result.value)
		.then(res => {
		  return handler(generator.next(res));
		});
	  }
		return handler(generator.next());

}