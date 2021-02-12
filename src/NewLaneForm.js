import React from 'react';

class NewLaneForm extends React.Component {
   constructor(props) {
   	  super(props);
   }
   render() {
   	 const {onCancel, t} = this.props;
   	 const handleAdd = () => this.props.onAdd({title: this.inputRef.value});
   	 const setInputRef = (ref) => this.inputRef = ref;
   	  return (
   	  	<div>
   	  	 <input ref={setInputRef} placeholder = {t('placeholder.title')} autoFocus/>
   	  	 <button onClick={handleAdd}>{t('button.Add lane')}</button>
   	  	 <button onClick={onCancel}>{t('button.Cancel')}</button>
   	  	</div>
   	  );
   }
}

export default NewLaneForm;