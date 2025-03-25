// Sử dụng GMO GAME SDK
const sdk = GMOGameSDK.getInstance();

function init(gmogameConfig,firebaseConfig){
  sdk.init(gmogameConfig,firebaseConfig);
}
function setKeepLoginSession(keep) {
  sdk.setKeepLoginSession(keep);
}

function setAutoShowLoginDialog(autoShow) {
  sdk.setAutoShowLoginDialog(autoShow);
}

function showLoginView() {
  sdk.showLoginView();
}

function logout() {
  sdk.logout();
}

function setRoleWithRoleName(characterName,characterId,serverName,serverId) {
  sdk.setRoleWithRoleName(characterName,characterId,serverName,serverId);
}

function showPaymentView() {
  sdk.showPaymentView();
}

function showAccountLinkView() {
  sdk.showAccountLinkView();
}

function switchAccount() {
  sdk.switchAccount();
}

function getUserInfo() {
  return sdk.getUserInfo();
}

function isUserLoggedIn() {
  return sdk.isUserLoggedIn();
}

function logEvent(eventName, eventParams) {
  sdk.logEvent(eventName, eventParams);
}

window.addEventListener('gmogame-sdk-ui-on-user-login-success', async (event) => {
  console.log('gmogame-sdk-ui-on-user-login-success:', event.detail); 
  const result = event.detail;
  unityGame.SendMessage("GMOGameSDKReceiver", "OnLoginSuccess", JSON.stringify(result));
});

window.addEventListener('gmogame-sdk-ui-on-user-logout', async (event) => {
  console.log('gmogame-sdk-ui-on-user-logout:', event.detail); 
  const username = event.detail;
  unityGame.SendMessage("GMOGameSDKReceiver", "OnLogoutSuccess", JSON.stringify(username));
});

window.addEventListener('gmogame-sdk-ui-on-account-link-success', async (event) => {
  console.log('gmogame-sdk-ui-on-account-link-success:', event.detail); 
  unityGame.SendMessage("GMOGameSDKReceiver", "OnAccountLinkSuccess", JSON.stringify(event.detail));
});



