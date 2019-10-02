import Injector from 'lib/Injector';

import ImageOptionsetField from 'components/ImageOptionsetField';

export default () => {
    Injector.component.registerMany({
        ImageOptionsetField,
    });
};
