export function ProgressBarADHD({ warning, danger, success, total, complete }) {
	if (danger) {
		return (
			<div className=' text-red-500 text-justify font-semibold mt-4 bg-red-100 border border-red-600 rounded-lg flex flex-col items-center justify-center p-6  w-full max-w-xs'>
				<h1 className="font-bold"> Completed {complete}/{total} Tasks </h1>
				<h2 className="mt-2">One Step at a Time. Take a breath and lets focus Again!</h2>
			</div>
		)

	} else if (warning) {
		return (
			<div className=' text-yellow-700 text-justify font-semibold mt-4 bg-yellow-100 border border-yellow-600 rounded-lg flex flex-col items-center justify-center p-6  w-full max-w-xs'>
				<h1 className="font-bold"> Completed {complete}/{total} Tasks </h1>
				<h2 className="mt-2">Almost there. Let's stay focused</h2>
			</div>
		)

	} else if (success) {
		return (
			<div className=' text-green-700 text-justify font-semibold mt-4 bg-green-100 border border-green-600 rounded-lg flex flex-col items-center justify-center p-6  w-full max-w-xs'>
				<h1 className="font-bold"> Completed {complete}/{total} Tasks </h1>
				<h2 className="mt-2">Yes! You did it! Let's keep the pace</h2>
			</div>
		)

	}


}
