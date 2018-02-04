/// Users get an ID and deeds done (trails later)
/// trails get an ID and list of

var user_count = 0;

var User_object = {};

var users = [];
var completed_deeds = [];
var deeds = ['Hold the door open for someone',
             'Give a compliment to someone',
             'Pick up litter from the ground',
             'Call up an old friend and say hello',
             'Donate to a charity (any little goes a long way)',
             'Send a thank you note to someone you feel goes unappreciated',
             'Speak up to that one person you always seem to see but never speak too',
             'Pay for the toll, coffee, or bill for the person behind you',
             'Tell a friend/family member(s) how much you appreciate them',
             "Donate that shirt you haven't worn since last year",
             'Leave a positive note to a stranger',
             "Do some chores so your guardian doesn't have to",
             'Be patient; let someone else go first',
             'Tell the manager how well the employee/waiter is doing',
             'Give a nice tip',
             'Recycle!'];

//Make a new user
function init_user(Username, Password)
{
  for (var i = 0; i < users.length; i++)
  {
    if (users[i].username == username)
    {
      alert("Username is already taken");
      return "ERROR";
    }
  }
  var User_Object =
  {
    username: Username;
    password: Password;
    id: user_id_generator();
    pending_deed = assign_random_deed();
    friends: [];
    user_deeds: [];
  };
  users.push(User_Object);
  return "SUCCESS";
}

//Check credentials of existing user
function check_login(username, password)
{
  for (var i = 0; i < users.length; i++)
  {
    if (username == users[i].username)
    {
      if (password == users[i].password)
        return true;
      break;
    }
  }
  alert("Username or password is incorrect");
  return false;
}


//Either login or sign up user
function get_new_user_information(init_user, check_login)
{
  var newbie = confirm("Press OK if you are a new user");
  var username = prompt("Please enter username");
  var password = prompt("Please enter password");
  if (newbie)
  {
    while (init_user(username, password) == "ERROR")
    {
      username = prompt("Please enter a different username");
      password = prompt("Please enter a password");
    }
  }
  else {
    while (!check_login(username, password))
    {
      username = prompt("Please enter your username");
      password = prompt("Please enter your password");
    }
  }
}

// Get address from user
function get_address()
{
  var address = prompt("Please enter your current city");
  return address;
}

// Takes a Place object
function init_deed(id, coordinate)
{
  var Deed_object =
  {
    deed_string: deeds[id];
    coor: coordinate
  }
  return Deed_object;
}

// Generates a random user ID number
function user_id_generator()
{
  user_count++;
  return user_count;
}

// Search for deed id number
function search_for_deed_id(deed)
{
  for (i = 0; i < deeds.length; i++)
  {
    if (deed == deeds[i])
    {
      return i;
    }
  }
}

// Adds deed to user's completed deeds
function add_to_user_deeds(user, deed)
{
  user.user_deeds.push(deed);
}

// Adds deed to global completed deeds list
function add_to_completed_deeds(deed)
{
  deed_id = search_for_deed_id(deed);
  if (completed_deeds[deed_id] == NULL)
  {
    completed_deeds[deed_id] = [];
  }
  completed_deeds[deed_id].push(deed);
}

// Adds friend to user's friends list
function add_friend(user, friend_id)
{
  for (i = 0; i < user.friends.length; i++)
  {
    if (friend_id == user.friends[i])
    {
      alert("You have already added this friend")
      return;
    }
  }
  user.friends.push(friend_id);
}

// Generates a random deed for the user
function assign_random_deed()
{
  random_deed = (Math.random() * deeds.length * 10) % deeds.length;
  return random_deed;
}

// Returns the list of completed deeds
function get_completed_deeds()
{
  return completed_deeds;
}
