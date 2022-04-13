const Auth = (isLoggedIn) => {
  const ProtectedPaths = {
    home: ':user_id',
    details: ':user_id/:house_id/details',
    reservation: ':user_id/:house_id/reservation',
    userReservations: 'users/:user_id/reservations',
    addHouse: 'new_listing',
    deleteHouse: ':user_id/delete',
    login: 'login',
    register: 'register',
  };

  const defaultPaths = {
    home: '',
    details: ':house_id/details',
    reservation: 'login',
    userReservations: 'reservations',
    addHouse: 'new_listing',
    deleteHouse: 'login',
    login: 'login',
    register: 'register',
  };

  return isLoggedIn ? ProtectedPaths : defaultPaths;
};

export const MenuAuth = (isLoggedIn, userId, houseId = 0) => {
  const ProtectedPaths = {
    home: `/${userId}`,
    reservation: `/${userId}/${houseId}/reservation`,
    userReservations: `users/${userId}/reservations`,
    addHouse: 'new_listing',
    deleteHouse: `/${userId}/delete`,
    login: 'login',
    register: 'register',
  };

  const defaultPaths = {
    home: '',
    reservation: 'login',
    userReservations: 'reservations',
    addHouse: 'new_listing',
    deleteHouse: 'login',
    login: 'login',
    register: 'register',
  };

  return isLoggedIn ? ProtectedPaths : defaultPaths;
};

export default Auth;
