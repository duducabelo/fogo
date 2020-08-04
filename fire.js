const fogoPixelArray = []
const FogoWidth = 10
const FogoHeight = 10

const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]

function start(){
	criarFogoDadosEstrutura()
	criandoFonteFogo()
	renderFogo()

	setInterval(calculoFogoEspalha(), 1000)
	
}

function criarFogoDadosEstrutura(){ //estrutuda de dados "métudo"
	const numeroDePixel = FogoWidth * FogoHeight

	for (let i = 0; i < numeroDePixel; i++) {
		fogoPixelArray[i] = 0
	}
}

function calculoFogoEspalha(){ //per corre o array de cima para baixa
	for (let column = 0; column < FogoWidth; column++) {
		for (let row = 0; row < FogoHeight; row++) {
			const pixelIndex = column + FogoWidth * row

			//console.log(pixelIndex)
			updateFireIntensityPerPixel(pixelIndex)
		}
	}

	renderFogo()	
}


function updateFireIntensityPerPixel(currentPixelIndex) {
  const belowPixelIndex = currentPixelIndex + FogoWidth

  // below pixel index overflows canvas
  if (belowPixelIndex >= FogoWidth * FogoHeight) {
    return
  }

  const decay = 1
  const belowPixelFireIntensity = fogoPixelArray[belowPixelIndex]
  const newFireIntensity = belowPixelFireIntensity - decay 

	fogoPixelArray[currentPixelIndex] = newFireIntensity
}



function renderFogo(){
	
	let teste = '<table cellpadding=0 cellspacing=0>'

	for (let row = 0; row < FogoHeight; row++) {
		teste += '<tr>'

		for (let column = 0; column < FogoWidth; column++) {
			const pixelIndex = column + (FogoWidth * row)

			const intencidadeDoFogo = fogoPixelArray[pixelIndex]

		teste += '<td>'
		teste += `<div class="pixel-index">${pixelIndex}</div>`
		teste += intencidadeDoFogo
		teste += '</td>'
		
		}
		
		teste += '</tr>'
	}

	teste += '</table>'
	//console.log(teste)
	document.querySelector('#fogoCanvas').innerHTML = teste  //ou document.getElementById('fogoCanvas').innerHTML = teste
}	

function criandoFonteFogo(){
	for (let column = 0; column <= FogoWidth; column++) {
		const sobreIndicePixelFluxo = FogoWidth * FogoHeight
		const pixelIndex = (sobreIndicePixelFluxo - FogoWidth) + column

		fogoPixelArray[pixelIndex] = 36

	}
}

start()

// what()
// function what(){
//         document.getElementById('hello').innerHTML = 'ola';
//     };