module.exports = {
        /**
         * define actions for the page object
         */

        iEnterTitle: async (sbook) => {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
                                interaction: {
                                        idSuffix: "inner"
                                }
                        }
                }).enterText(sbook);
        },

        iSelectGenre: async () => {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
                        }
                }).press();

                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::genre_ID::Dialog::qualifier::::Table-innerTable-rows-row0",
                                searchOpenDialogs: true,
                                interaction: {
                                        idSuffix: "col1"
                                }
                        }
                }).press();

        },

        iSelectAuthor: async () => {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
                        }
                }).press();

                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::author_ID::Dialog::qualifier::::Table-innerTable-rows-row0",
                                searchOpenDialogs: true,
                                interaction: {
                                        idSuffix: "col0"
                                }
                        }
                }).press();
        },

        iPressCreate: async () => {
                await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::FooterBar::StandardAction::Save",
                                interaction: {
                                        idSuffix: "BDI-content"
                                }
                        }
                }).press();
        },


        iNavigateBack: async () => {
                await browser.asControl({
                        selector: {
                        id: "backBtn"
                }}).press();
            },

        /**
         * define assertions for the page object
         */

        iSeeEditButton: async () => {
                const enabled = await browser.asControl({
                        selector: {
                                id: "books::BooksDetailsList--fe::StandardAction::Edit"
                        }
                }).getEnabled();
                expect(enabled).toBeTruthy();
        }

};