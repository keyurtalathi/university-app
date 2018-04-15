// @ts-check
import React from 'react';
import ShippingPackage from './Shippingpackage';
import Title from './title';
import AddPackageForm from './AddPackageForm';
import BottomNavigation from "./BottomNavigation"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.navBarStyle={
      display:"flex",
      justifyContent:"center",
      margin:2
    };
    this.state = {
      shippingPackageList: [],
      showAddForm: false,
      newPackage: {
        packageId: 1,
        orderId: 2,
        amount: 3
      },
      navComponents:[{
        label:"Recent",
        icon:"https://image.flaticon.com/icons/svg/54/54415.svg",
        color:"blue"
      },
      {
        label:"Nearby",
        icon:"https://cdn0.iconfinder.com/data/icons/map-4/500/map_6-512.png",
        color:"black"
      },
      {
        label:"Favorites",
        icon:"https://cdn0.iconfinder.com/data/icons/thin-voting-awards/57/thin-231_star_favorite-512.png",
        color:"black"
      }
    ]
  }
  
  this.flag=0;
  this.label="";
  this.newPackage = {
    orderId: 3424,
    packageId: 123,
    amount: 90
  };
  
  // event handler declarations to maintain context
  this.addToList = this.addToList.bind(this);
  this.setNewData = this.setNewData.bind(this);
  this.changeText = this.changeText.bind(this);
  }
  
  getData() {
    return fetch("http://www.mocky.io/v2/5ac076aa2f0000560096115e", {
      headers: {},
      method: "GET"
    }).then(res => {
      if(res.ok) {
        return Promise.resolve(res.json())
      }
    });
  }
  
  setNewData(key, value) {
    this.setState({
      newPackage: {...this.state.newPackage, [key]: value}
    })
  }
  
  
  
  showForm() {
    this.setState({
      showAddForm: true
    })
  }
  
  addToList() {
    const newPackage = this.state.newPackage;
    if (! newPackage)
    return;
    // DO NOT DO THIS
    // this.state.shippingPackageList.push(this.newPackage);
    
    this.setState({
      shippingPackageList:
      [...this.state.shippingPackageList, newPackage],
      showAddForm: false
    });
    
    // this.state.shippingPackageList.push(this.newPackage);
    // this.setState({
      //   shippingPackageList: this.state.shippingPackageList
      // });
      
      // this.setState(() => ({
        //   shippingPackageList:
        //     [...this.state.shippingPackageList, this.newPackage]
        // }))
      }
      
      // just after the first render -called only once
      componentDidMount() {
        // API call
        // Get List
        // Set state
        console.log("did mount");
        this.getData().then(shippingPackageList => {
          // console.log(shippingPackageList);
          this.setState({
            shippingPackageList
          });
        });;
      }
      
      // just before the first render - called only once
      componentWillMount() {
        console.log("will mount")
      }
      
      // is for performance things - optimization
      // shouldComponentUpdate(props, state) {
        //   // logic
        //   return false;
        // }
        
        // calls after every update and rerender
        componentDidUpdate() {
          console.log("did update")
          // this.setState({
            //   showAddForm: false
            // })
          }
          
  changeText(e){
    let label = e.target.id;
    for(let i=0;i<this.state.navComponents.length;i++)
    {
      if(this.state.navComponents[i].label==label)
      {
        this.state.navComponents[i].color="blue";
      }
      else
      {
        this.state.navComponents[i].color="black";
      }
    }
    
    this.setState(this.state);
  }
  
  render() {
    const { showAddForm, shippingPackageList, navComponents} = this.state;
    
    return <div>
      <Title>To Deliver List</Title>
      {
        shippingPackageList
          .map(shippingpackage => <ShippingPackage key={shippingpackage.orderId} {...shippingpackage} />)
      }
      {!showAddForm && <button type="button" onClick={() => this.showForm()}>Add To List</button>}
      {showAddForm ? 
        <AddPackageForm 
          {...this.state.newPackage} 
          setNewData={this.setNewData}
          onAdd={this.addToList}/> : null}
        <div >
        <table style={this.navBarStyle}>
          
            {
              navComponents
              .map(navComponent => <BottomNavigation key={navComponent.label} {...navComponent} changeText={this.changeText} />)
            }
           
          </table>
        </div>
    </div>
  }
}
export default App;
