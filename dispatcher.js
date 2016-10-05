// import {Dispatcher} from 'flux';
// export default new Dispatcher;
import guid from 'guid';
var listeners = {};

module.exports = {
    register: function (cb) {
        var id = guid.raw();
        listeners[id] = cb;
        return id;
    },
    dispatch: function (payload) {
        for (var id in listeners) {
                listeners[id](payload);
        }
    }

}