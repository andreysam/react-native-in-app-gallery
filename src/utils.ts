import {ImageFile} from './typings';
import {CameraOptions, ImageLibraryOptions, ImagePickerResponse} from 'react-native-image-picker';

export const convertToImageFile = (
  res: ImagePickerResponse,
  options: ImageLibraryOptions | CameraOptions,
): ImageFile | null => {
  const image = res.assets?.[0];

  if (image) {
    return {
      uri: image.uri || '',
      filename: image.fileName || '',
      fileSize: image.fileSize || null,
      height: image.height || 1000,
      width: image.width || 1000,
      playableDuration: 0,
      isStored: options.hasOwnProperty('storageOptions'),
    };
  }

  return null;
};
