// Action Creator
export const selectSong = (song) => { //exported as a name export
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

