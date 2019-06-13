{
    const handleSubmitForm = e => {
        const $form = e.currentTarget;
        if ($form.checkValidity()) {
            console.log(`Valid => submit form`);
        } else {
            console.log(`Niet valid => submit form niet`);
            e.preventDefault();
        }
    };

    const handeInputField = e => {
        const $field = e.currentTarget;
        if ($field.validity.valid) {
            $field.parentElement.querySelector(`.error`).textContent = ``;
        }
    };

    const handeBlurField = e => {
        const $field = e.currentTarget;
        if ($field.validity.valueMissing) {
            $field.parentElement.querySelector(`.error`).textContent = `Verplicht`;
        }
        if ($field.validity.typeMismatch) {
            $field.parentElement.querySelector(`.error`).textContent = `Foutief`;
        }
        if ($field.validity.rangeOverflow) {
            $field.parentElement.querySelector(`.error`).textContent = `Te groot`;
        }
    };

    const init = () => {
        const $form = document.querySelector(`form`);
        $form.noValidate = true;
        $form.addEventListener(`submit`, handleSubmitForm);

        const $naam = document.querySelector(`.naam`);
        $naam.addEventListener(`input`, handeInputField);
        $naam.addEventListener(`blur`, handeBlurField);

        const $email = document.querySelector(`.email`);
        $email.addEventListener(`input`, handeInputField);
        $email.addEventListener(`blur`, handeBlurField);

        const $number = document.querySelector(`.aantal`);
        $number.addEventListener(`input`, handeInputField);
        $number.addEventListener(`blur`, handeBlurField);
    };

    init();
}