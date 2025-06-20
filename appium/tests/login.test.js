describe('Login Flow', () => {
    it('should login successfully', async () => {
      await $('~Login').click();
      await $('~username_input').setValue('qa_user');
      await $('~password_input').setValue('secret123');
      await $('~Submit').click();
      await expect($('~Welcome')).toBeDisplayed();
    });
  });
  