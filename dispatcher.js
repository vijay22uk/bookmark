// import {Dispatcher} from 'flux';
// export default new Dispatcher;
import guid from 'guid';
var listeners = {};

module.exports = {
    register: function (cb) {
        var id = guid.raw();
        console.log('adding')
        listeners[id] = cb;
        return id;
    },
    dispatch: function (payload) {
        console.log(listeners);
        for (var id in listeners) {
                listeners[id](payload);
        }
    }

}