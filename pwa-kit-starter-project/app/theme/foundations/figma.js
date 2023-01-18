import data from '../../../figmaData/tokens.json'

let colorData = data.global.color;
const figmaColors = {
    figmaBackgroundColor: colorData.backgroundColor.value,
    figmaTextColor: colorData.globalTextColor.value
}

export default figmaColors