function solution(input, markers) {
	let isThereMarker = false;
	let solut = [];
	let word = input.split("");
	for (let i = 0; i < word.length; i++) {
		if (markers.includes(word[i])) {
			isThereMarker = true;
		}

		if (isThereMarker && word[i] === "\n") {
			isThereMarker = false;
		}

		if (!isThereMarker) {
			solut.push(word[i]);
		}
	}
	return solut.join("").replace(/\s\n/, "\n").trim();
}
