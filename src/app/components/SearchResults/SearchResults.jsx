import './SearchResults.scss';
import React from 'react';

export default React.createClass({
   render: function() {
       return (
           <div>
               <div className=".SearchResults">
                   <h2>{this.props.params.searchParam}</h2>
               </div>
           </div>
       )
   }
});