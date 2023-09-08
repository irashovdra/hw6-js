const isOnline = false;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOnline && isFriend && isDnd;
console.log(canOpenChat);
