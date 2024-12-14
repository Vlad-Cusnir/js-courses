console.log('Talking about BOM!');

// The modal dialog boxes are part of BOM (alert, prompt, confirm):
// window.alert('I belong to the BOM, not to the DOM!');
// alert('This is the short form of the alert');


// The location object is part of BOM
console.log('');
console.log('Page URL: ');
console.log(window.location);
console.log(location);


// The window object is part of the BOM
console.log('');
console.log('Trigger the print dialog: ');
// window.print();


// Cookies are part of BOM
console.log('');
console.log('Cookies: ');
// document.cookie = "test1=Hello; SameSite=None; Secure";document.cookie = "test1=Hello; SameSite=None; Secure";
// document.cookie = "test2=World; SameSite=None; Secure";document.cookie = "test1=Hello; SameSite=None; Secure";
console.log('☑ You can see cookies in the DevTools under the Application tab, Cookies section');
console.log(document.cookie);


// Local storage is part of BOM
console.log('');
console.log('Local storage: ');
console.log('☑ You can see local storage content in the DevTools under the Application tab, Local storage section');
// localStorage.setItem("farewellMsg", "Stay hungy, stay foolish! - Steve Jobs.");
console.log(localStorage.getItem("farewellMsg"));