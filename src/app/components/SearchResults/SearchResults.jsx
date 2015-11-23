import './SearchResults.scss';
import React from 'react';

export default React.createClass({
   render: function() {
       return (
           <div>
               <div className="SearchResults">
                   <h1>{this.props.params.searchParam}?</h1>
               </div>
           </div>
       )
   }
});