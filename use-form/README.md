Example of use

```
    // all fields of form
    const formInitialState = {
        name:'',
        lastName:'',
        email:'',
    };
    const [formValues, handleInputChange, reset] = useForm(formInitialState);

```