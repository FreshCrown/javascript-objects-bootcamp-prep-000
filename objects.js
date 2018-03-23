var playlist = {
  Drake: "God's Plan.",
  JayZ: 'New York',
  Kendrick : 'Humble'
  
}

function updatePlayList(obj, key, value){
   return Object.assign({}, obj, { [key]: value })
}