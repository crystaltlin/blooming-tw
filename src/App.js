import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { HuePicker } from 'react-color';
import Slider from '@material-ui/core/Slider';


const marks = [
  {
    value: 0,
    label: 'Dec',
  },
  {
    value: 9,
    label: 'Nov',
  },
  {
    value: 18,
    label: 'Oct',
  },
  {
    value: 27,
    label: 'Sep',
  },
  {
    value: 36,
    label: 'Aug',
  },
  {
    value: 45,
    label: 'Jul',
  },
  {
    value: 54,
    label: 'Jun',
  },
  {
    value: 63,
    label: 'May',
  },
  {
    value: 72,
    label: 'Apr',
  },
  {
    value: 81,
    label: 'Mar',
  },
  {
    value: 90,
    label: 'Feb',
  },
  {
    value: 99,
    label: 'Jan',
  },
];

const colorStandards = {
  "red"       :[255,0,0],
  "orange"    :[255, 128, 0],
  "yellow"    :[255,255,0],
  "green"     :[0,255,0],
  "purple"    :[128,0,128],
  "pink"      :[255,0,255],
  "white"     :[255,255,255],
}

const colorGroups = {
  'red' : ['pine', 'maple'],
  'orange' : ['orangeLily', 'kapok', 'pumpkin'],
  'yellow' : ['sunflower', 'goldenTrumpet', 'goldenShower'],
  'green' : ['rice', 'victoria'],
  'purple' : ['wisteria', 'hydrangea'],
  'pink' : ['cherryBlossom', 'azalea'],
  'white' : ['chives', 'tungBlossom', 'callaLily']
}

const seasonGroups = {
  'January' : ['cherryBlossom', 'azalea', 'pine'],
  'February' : ['cherryBlossom', 'goldenTrumpet', 'azalea'],
  'March' : ['wisteria' , 'cherryBlossom', 'kapok', 'goldenTrumpet', 'callaLily', 'azalea'],
  'April' : ['wisteria' , 'cherryBlossom', 'kapok', 'callaLily', 'azalea', 'tungBlossom'],
  'May' : ['goldenShower', 'callaLily', 'hydrangea', 'tungBlossom'],
  'June' : ['rice', 'goldenShower', 'hydrangea'],
  'July' : ['victoria', 'rice', 'sunflower'],
  'August' : ['victoria', 'orangeLily', 'sunflower'],
  'September' : ['victoria', 'chives', 'orangeLily' ],
  'October' : ['pumpkin', 'maple'],
  'November' : ['maple', 'pumpkin','pine'],
  'December' : ['maple', 'pine']
}

const flowerColors = {
  'pumpkin' : '#ffa366',
  'victoria' : '#ccff66',
  'rice' : '#ccff66',
  'goldenShower' : '#ffff80',
  'chives': '#f2f2f2',
  'maple' : '#ff8080',
  'wisteria' : '#afa3f5',
  'cherryBlossom' : 'pink',
  'kapok' : '#ffa366',
  'goldenTrumpet' : '#ffff80',
  'callaLily' : ' #f2f2f2',
  'orangeLily' : '#ffa366',
  'azalea' : 'pink',
  'pine' : '#ff8080',
  'sunflower' : '#ffff80',
  'hydrangea' : '#afa3f5',
  'tungBlossom' : ' #f2f2f2'
}


const imagePaths = {
  'pumpkin' : 'pumpkin.png',
  'victoria' : 'victoria.png',
  'rice' : 'rice.png',
  'goldenShower' : 'golden_shower.png',
  'chives': 'chives.png',
  'maple' : 'maple.png',
  'wisteria' : 'wisteria.png',
  'cherryBlossom' : 'cherry_blossom.png',
  'kapok' : 'kapok.png',
  'goldenTrumpet' : 'golden_trumpet.png',
  'callaLily' : 'calla_lily.png',
  'orangeLily' : 'orange_lily.png',
  'azalea' : 'azalea.png',
  'pine' : 'pine.png',
  'sunflower' : 'sunflower.png',
  'hydrangea' : 'hydrangea.png',
  'tungBlossom' : 'tung_blossom.png'
}

const flowerSeasons = {
  'pumpkin' : 'October - November',
  'victoria' : 'July - September',
  'rice' : 'June - July',
  'goldenShower' : 'May - June',
  'chives': 'September',
  'maple' : 'October - December',
  'wisteria' : 'March - April',
  'cherryBlossom' : 'January - April',
  'kapok' : 'March - April',
  'goldenTrumpet' : 'February - March',
  'callaLily' : 'March - May',
  'orangeLily' : 'August - September',
  'azalea' : 'January - April',
  'pine' : 'November - January',
  'sunflower' : 'July - August',
  'hydrangea' : 'May - June',
  'tungBlossom' : 'April - May'
}

const locations = {
  'pumpkin' : 'Guanyin, Taoyuan',
  'victoria' : 'Xinpu, Taoyuan',
  'crop' : 'Mr. Brown Ave, Yilan',
  'goldenShower' : 'Chunghsing University, Taichung',
  'chives': 'Daxi, Taoyuan',
  'maple' : 'Taiping Mountain, Yilan',
  'wisteria' : 'Qingjing Farm, Nantou',
  'cherryBlossom' : 'Wuling Farm, Taichung',
  'kapok' : 'Dunluo Creek, Changhua',
  'goldenTrumpet' : 'Golden Castle, Tainan',
  'callaLily' : 'Yangming Mountain, Taipei',
  'orangeLily' : 'Fuli, Hualien',
  'azalea' : 'Hehuan Mountain, Nantou',
  'pine' : 'Nanzhuang, Miaoli',
  'sunflower' : 'Shanglin, Kaoshiung',
  'hydrangea' : 'Yangming Mountain, Taipei',
  'tungBlossom' : 'Qiongling, Hsinchu'
}

const descriptions = 
{
    "pumpkin" : "Visit pumpkin festival of Guanyin Taoyuan to enjoy the wonderful pumpkin harvest season! Not only will there be delicious pumpkin dishes and desserts, but also engaging Halloween competitions and activities! Morever, come create your own pumpkin art and appreciate the beautiful orange wave of PUMPKINS!",
    "victoria" : "Victoria is a gigantic water lily that can afford weight of over 200 pounds while floating gracefully on the water! Come to Xinpu Taoyuan to enjoy the amazing and beautiful green plates - VICTORIA! All varieties of lotus dishes are also available, including lotus ice and lotus soup!",
    "rice" : "We eat rice so often, but do you know how beautiful rice fields are! Visit Mr. Brown Avenue in Yilan, a renowned scenery with broad view of green crops, while the field surrounds the boulevard. There are sometimes graphical arts on the fields as well! The green wave of delicious food will amaze you with its simple yet fascinating beauty.",
    "goldenShower" : "The golden shower tree, or officially Cassia fistula, blooms in late spring. The tiny pedals form an amazing shower of gold which brightens up the community of Chunghsing University. Another fun fact about the tree is that it has very durable wood and are easily grown in tropical or subtropical areas.",
    "chives" : "Chives are known to be a relative of garlic and onion, which are mostly used in Chinese dishes! However, unlike its strong taste, it has very cute and delicate flowers. In fact, chive flowers come in pink, purple and white. The scenery in Daxi Taoyuan during flower season is deemed as the September snow.", 
    "maple" : "Taiping Mountain in Yilan has one of the best autumn/winter sceneries when its maple trees start turning red. The whole side of the mountain transforms from green to yellow and orange to red, indicating the approach of winter! Enjoy the momentary colorful mountains during winter season of Taiwan.", 
    "wisteria" : "Wisteria is a popular wood climbing plant with fascinating purple flowers in the spring. They are usually planted on wooden rails or roofs to form a waterfall of purple! This plant is hardy and fast growing! Visit Qingjing Farm in Nantou to appreciate the rare blooming of this violet flower.",
    "cherryBlossom" : "Cherry blossoms are one of the most popular flower sceneries. However, Wuling Farm will amaze you by its absurd amount of flowers and pink waves of beauty! Often times, airplanes from the airport nearby will fly over the sky for tourists to grasp a second of the plane surrounded by delicate pink pedals!",
    "kapok" : "Kapok, or officially Ceiba pentandra, is a gigantic tree that generates cotton-like fluff from its seed pods! Come visit Dunluo Creek at Changhua to appreciate the huge, tropical orange flower. After a few weeks, cotton fluffs will starting falling from the sky gracefully, creating a vastly different atmosphere during the season.",
    "goldenTrumpet": "The Eternal Golden Castle in Tainan is a renowned attraction for its historical use as a defensive castle. During spring, a whole line of golden trumpet trees blooms and decorates the castle with its vibrance and brightness. It is a great time for picnic and flower appreciation!",
    "callaLily" : "Calla lily is a classic and elegant flower that comes in all colors. However, Yangming mountaint is most famous for its white calla lilies and interesting events and flower picking. Aside from lilies, Yangming mountain is also home of various beautiful plants and animals. You will never get bored of the garden of Taipei.",
    "orangeLily" : "Orange Daylily is a carefree, adaptable and tolerant flower type. Striving on the hill of Fuli, Hualien, orange daylilies here present you a mountain of orange and warmth. However, each flower only blooms for a day, so the season lengthens only if the flowers bloom one after another!",
    "azalea" : "Azaleas are shade tolerant plants that are often a topic of ancient Chinese poetry. Their vibrant pink shines throughout early spring. Hehuan Mountain makes it even more impressive by its amazing landscape, clouds and sunrise. Go on a good hike on Hehuan Mountain to appreciate the great heights but amazing natural beauty.",
    "pine" : "Pine trees in Nanzhuang Miaoli turns orange and red during winter seasons. The vibrance of the leaves make visitors warm and amazed. The mountain of red also makes winter particularly impressive at Nanzhuang, Miaoli.",
    "sunflower" : "Shanglin Kaoshiung is famous for its SUNFLOWER maze. Besides engaging exhibitions nearby, Shanglin offeres beautiful sunflower fields where you cannot find anywhere else. THe flower turns towards the sun and motivates people to always looks at the bright side!",
    "hydrangea"  : "Hydrangea is one of the rare plants that have blue or purple flowers. Yangming Mountain offers visitors the chance to surround themselves with beautiful cloves of blue. This is a popular wedding photo attraction as well. Don't miss Yangming Mountain in early summer!", 
    "tungBlossom" : "Hsinchu is famous for its tung blossoms in late Spring. The white flowers have slight pink and yellow shades at its center and is widely called May snow because it covers the mountain flowers with a layer of white. Visit Qiongling for a peak of how the Tung blossom cools you down even in summer times."
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function cutHex(h) {return (h.charAt(0)==="#") ? h.substring(1,7):h}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function hexToRGB(h) {
  return [hexToR(h), hexToG(h), hexToB(h)]
}





class App extends React.Component{
    
    constructor(props) {
    super(props);
    this.state = {
      sliderColor: '#ffffff',
      displayItem: 'pumpkin',
      mode: 'item', // color, item, season
      currentSeason: 'November',
      prevSeason: 'November',
      season: 'January',
      color: 'white',
      group: seasonGroups['November'],
    };
    this.handleItemChange.bind(this)

    }

    handleSeasonChange = (value) => {
      var newseason;
      
      if (value > 99) {
        newseason = "January";
      } else if (value > 90) {
        newseason = "February";
      } else if (value > 81) {
        newseason = "March";
      } else if (value > 72) {
        newseason = "April";
      } else if (value > 63) {
        newseason = "May";
      } else if (value > 54) {
        newseason = "June";
      } else if (value > 45) {
        newseason = "July";
      } else if (value > 36) {
        newseason = "August";
      } else if (value > 27) {
        newseason = "September";
      } else if (value > 18) {
        newseason = "October";
      } else if (value > 9) {
        newseason = "November";
      } else if (value >= 0) {
        newseason = "December";
      } 

      if (newseason !== this.state.season){
        var newgroup = seasonGroups[newseason];
        this.setState({
          mode: "season",
          season: newseason,
          group: newgroup,
        });
      }
      return `${this.state.season}°C`;
    }

    handleColorChange = (color) => {
      var newColor = this.getColorName(color.hex);

      if (newColor !== this.state.color){
        var newgroup = colorGroups[newColor];
        shuffle(newgroup);
        this.setState({ 
          sliderColor: color.hex,
          color: newColor, 
          mode: 'color', 
          group: newgroup
        });
      } else {
        this.setState({ 
          sliderColor: color.hex,
          mode: 'color', 
        });
      }
    };

    exitItem = () => {
      this.setState({
        mode: 'season'
      });
    }



    handleItemChange = (item) => {
      this.setState({ 
        mode : 'item',
        displayItem: item
      });
    }


    setRightImage = (image_path) => {
      this.setState({rightImage: image_path});
    };

  

    changeGroup = (newgroup) => {
      this.setState({
        group: newgroup
      });
    }

    getColorName = (hex) => {
      var mycolor = hexToRGB(hex);
      var tmpdist = 255*3;
      var tmpname = "none";
      for(var colorname in colorStandards) {  
        var colorset = colorStandards[colorname];      
        var r_dist = Math.abs(Math.pow(mycolor[0],2) - Math.pow(colorset[0],2));
        var g_dist = Math.abs(Math.pow(mycolor[1],2) - Math.pow(colorset[1],2));       
        var b_dist = Math.abs(Math.pow(mycolor[2],2) - Math.pow(colorset[2],2));
        var totaldist = Math.sqrt(r_dist + g_dist + b_dist);
        if (totaldist < tmpdist) {        
            tmpname = colorname;
            tmpdist = totaldist;
        }
    }
    return tmpname;

    }



    getComponent = () => {
      var mode = this.state.mode;
      var group = this.state.group;
      var component;
      if (mode === 'item') {
        component = (
         <>
          <div className="right-grid">
            <img alt={this.state.displayItem} className="grid-image"  src={"long/" + imagePaths[this.state.displayItem]}></img>
          </div>
          <div className="left-grid description" style={{'backgroundColor': flowerColors[this.state.displayItem]}}>
            <Button variant="outline-dark" id="close-button" onClick={() => this.exitItem()}>X</Button>
            <h2>{locations[this.state.displayItem]}</h2>
            <h4>{flowerSeasons[this.state.displayItem]}</h4>
            <p>{descriptions[this.state.displayItem]}</p>
          </div>
        </>
          )
      }
      if (mode === 'season') {
        if (group.length < 3) {
          component = (
            <>
          <div className="right-grid">
          <Button variant="outline-dark" id="detail-button-right" onClick={() => this.handleItemChange(group[0])}>{group[0]}</Button>
            <img alt={group[0]} className="grid-image" src={"long/" + imagePaths[group[0]]}></img>
          </div>
          <div className="left-grid">
          <Button variant="outline-dark" id="detail-button-left" onClick={() => this.handleItemChange(group[1])}>{group[1]}</Button>
            <img alt={group[1]} className="grid-image" src={"long/" + imagePaths[group[1]]}></img>
          </div>
        </>
          )
        } else {
          component = (
          <>
          <div className="right-grid">
          <Button variant="outline-dark" id="detail-button-right" onClick={() => this.handleItemChange(group[0])}>{group[0]}</Button>
            <img alt={group[0]} className="grid-image" src={"long/" + imagePaths[group[0]]}></img>
          </div>
          <div className="top-left-grid">
          <Button variant="outline-dark" id="detail-button-left" onClick={() => this.handleItemChange(group[1])}>{group[1]}</Button>
            <img alt={group[1]} className="grid-image" src={"wide/" + imagePaths[group[1]]}></img>
          </div>
          <div className="bottom-left-grid">
          <Button variant="outline-dark" id="detail-button-bottom" onClick={() => this.handleItemChange(group[2])}>{group[2]}</Button>
            <img alt={group[2]} className="grid-image" src={"wide/" + imagePaths[group[2]]}></img>
          </div>
          </>
          )
        }
        
      }
      if (mode === 'color') {
        
        if (group.length < 3) {
          component = (
            <>
          <div className="right-grid">
          <Button variant="outline-dark" id="detail-button-right" onClick={() => this.handleItemChange(group[0])}>{group[0]}</Button>
            <img alt={group[0]} className="grid-image" src={"long/" + imagePaths[group[0]]} ></img>
          </div>
          <div className="left-grid">
          <Button variant="outline-dark" id="detail-button-left" onClick={() => this.handleItemChange(group[1])}>{group[1]}</Button>
            <img alt={group[1]} className="grid-image"  src={"long/" + imagePaths[group[1]]}></img>
          </div>
        </>
          )
        } else {
          component = (
          <>
          <div className="right-grid">
          <Button variant="outline-dark" id="detail-button-right" onClick={() => this.handleItemChange(group[0])}>{group[0]}</Button>
            <img alt={group[0]} className="grid-image"  src={"long/" + imagePaths[group[0]]}></img>
          </div>
          <div className="top-left-grid">
          <Button variant="outline-dark" id="detail-button-left" onClick={() => this.handleItemChange(group[1])}>{group[1]}</Button>
            <img alt={group[1]} className="grid-image"  src={"wide/" + imagePaths[group[1]]}></img>
          </div>
          <div className="bottom-left-grid">
          <Button variant="outline-dark" id="detail-button-bottom" onClick={() => this.handleItemChange(group[2])}>{group[2]}</Button>
            <img alt={group[2]} className="grid-image"  src={"wide/" + imagePaths[group[2]]}></img>
          </div>
          </>
          )
        }
        
      }
      return component;

    }

    render() {
        return(

<div className="App">
      <div><hr id="hr-line" style={{'backgroundColor': this.state.sliderColor}}/></div>
      <div className="app">
      <div className="bars">
        <div id="color-bar">
        <HuePicker
          color={ this.state.sliderColor }
          onChange={ this.handleColorChange }
        />
        </div>
        <div id="season-bar">
        <Slider
          id="season-bar"
          orientation="vertical"
          defaultValue={0}
          aria-labelledby="vertical-slider"
          getAriaValueText={this.handleSeasonChange}
          marks={marks}
        />

        </div>
        
      </div>
      
      

      <div className="grid-container">
        <div id="map">
        <img id="taiwan" src="taiwan.png" alt="taiwan"></img>
          <span title="Taipingshan, Yilan"><span className="dot red" id="taiping" onClick={() => {this.handleItemChange("maple")}}></span></span>
          <span title="Nanzhuang, Miaoli"><span className="dot red" id="miaoli" onClick={() => {this.handleItemChange("pine")}}></span></span>
          <span title="Fuli, Hualien"><span className="dot orange" id="hualien" onClick={() => {this.handleItemChange("orangeLily")}}></span></span>
          <span title="Dongluo, Changhua"><span className="dot orange" id="changhua" onClick={() => {this.handleItemChange("kapok")}}></span></span>
          <span title="Guanyin, Taoyuan"><span className="dot orange" id="guanyin" onClick={() => {this.handleItemChange("pumpkin")}}></span></span>
          <span title="Shanlin, Kaoshiung"><span className="dot yellow" id="kaoshiung" onClick={() => {this.handleItemChange("sunflower")}}></span></span>
          <span title="Golden Castle, Tainan"><span className="dot yellow" id="tainan" onClick={() => {this.handleItemChange("goldenTrumpet")}}></span></span>
          <span title="Chunghsing University, Taichung"><span className="dot yellow" id="chunghsing" onClick={() => {this.handleItemChange("goldenShower")}}></span></span>
          <span title="Mr Brown Ave, Yilan"><span className="dot green" id="yilan" onClick={() => {this.handleItemChange("rice")}}></span></span>
          <span title="Xinpu, Taoyuan"><span className="dot green" id="xinpu" onClick={() => {this.handleItemChange("victoria")}}></span></span>
          <span title="Hehuanshan, Nantou"><span className="dot pink" id="hehuan" onClick={() => {this.handleItemChange("azalea")}}></span></span>
          <span title="Wuling, Taichung"><span className="dot pink" id="wulin" onClick={() => {this.handleItemChange("cherryBlossom")}}></span></span>
          <span title="Yangmingshan, Taipei"><span className="dot purple" id="yangming" onClick={() => {this.handleItemChange("hydrangea")}}></span></span>
          <span title="Qingjing Farm, Nantou"><span className="dot purple" id="qingjing" onClick={() => {this.handleItemChange("wisteria")}}></span></span>
          <span title="Daxi, Taoyuan"><span className="dot white" id="daxi" onClick={() => {this.handleItemChange("chives")}}></span></span>
          <span title="Qionglin, Hsinchu"><span className="dot white" id="qionglin" onClick={() => {this.handleItemChange("tungBlossom")}}></span></span>
   
         
        </div>
      
        {this.getComponent()}
     
     

      </div> 
    </div>
    </div>

          );
    }
};





export default App;
