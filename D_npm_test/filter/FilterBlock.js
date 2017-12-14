var FilterBlock = React.createClass({
    
      displayName: 'FilterBlock',
    
      propTypes: {
        countries:React.PropTypes.arrayOf(
          React.PropTypes.string.isRequired,
        ),
      },
    
      getInitialState: function() {
        return { 
          isChecked: false,
          allCountries: this.props.countries,
          data: [],
          searchWord: '',
        };
      },
      
      _prepareData: function() {

      }

      _sort: function() {
        console.log(this.state.isChecked);
        this.setState({
            isChecked: !this.state.isChecked,
        });
        
      },
      
      _search: function(e){
        var updatedList = this.state.allCountries;
        updatedList = updatedList.filter(function(item){
          return item.toLowerCase().search(
            e.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
      },
      componentWillMount: function(){
        this.setState({data: this.state.allCountries})
      },
      
      render: function() {
        return React.DOM.div( {className:'FilterBlock'}, 
          React.DOM.input( {className:'FilterSort',type:'checkbox',onClick:this._sort}),
          React.DOM.input( {className:'FilterSearch',type:'text',onChange:this._search}),
          React.DOM.ul({className:'FilterList'},
                this.state.data.map(function(name,idx){
                    return React.DOM.li({key:idx},name);
                })
         ),
        );
    
      },
    
    });