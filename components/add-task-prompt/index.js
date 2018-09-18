import React from 'react';
import Prompt from 'react-native-prompt';

const AddTaskPrompt = ({isVisible, OnCancel,onSubmitCallBack}) => (
<Prompt
    title="Ajouter une nouvelle tâche"
    placeholder="Ex : Acheter du lait"
    defaultValue=""
    visible={isVisible}
    onCancel={() => onCancelCallBack()}
    onSubmit={(value) => onSubmitCallBack(value)}
     />
);

export default AddTaskPrompt;
