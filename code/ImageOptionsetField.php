<?php

/**
 * Class ImageOptionsetField
 */
namespace UncleCheese\Forms;

use Psr\Log\InvalidArgumentException;
use SilverStripe\Forms\OptionsetField;
use SilverStripe\View\Requirements;

class ImageOptionsetField extends OptionsetField
{
    /**
     * @var array
     */
    protected $imageIndex = [];

    /**
     * @var int
     */
    protected $imageWidth;

    /**
     * @var int
     */
    protected $imageHeight;

    /**
     * ImageOptionsetField constructor.
     * @param string $name
     * @param null|string $title
     * @param array|ArrayAccess $source
     * @param string $value
     * @param Form|null $form
     * @param null $emptyString
     */
    public function __construct($name, $title = null, $source=array(), $value='', $form=null, $emptyString=null)
    {
        $this->imageWidth = $this->config()->default_image_width;
        $this->imageHeight = $this->config()->default_image_height;

        parent::__construct($name, $title, $source, $value, $form, $emptyString);
    }

    /**
     * @param array|ArrayAccess $source
     * @return ImageOptionsetField
     * @throws Exception
     */
    public function setSource($source)
    {
        foreach ($source as $key => $data) {
            // If an array is not passed, assume the values are image paths
            if (!is_array($data)) {
                $this->source[$key] = '';
                $this->imageIndex[$key] = $data;
            } else {
                if (!isset($data['image'])) {
                    throw new InvalidArgumentException('ImageOptionsetField::setSource() - When using an array as the value of the source, you must provide an "image" key with a path to the image, and optionally a "title" key');
                }
                $this->imageIndex[$key] = $data['image'];
                $this->source[$key] = isset($data['title']) ? $data['title'] : '';
            }
        }

        return $this;
    }

    /**
     * @param $key
     * @return mixed
     */
    public function StyleAttributes($key)
    {
        if (isset($this->imageIndex[$key])) {
            $imagePath = $this->imageIndex[$key];
            return sprintf(
                'width:auto;height:%spx;background:url(%s);background-size:cover;',
                $this->getImageHeight(),
                $imagePath
            );
        }
    }

    /**
     * @param array $properties
     * @return HTMLText
     */
    public function Field($properties = [])
    {
        Requirements::css('unclecheese/silverstripe-image-optionset: css/imageoptionsetfield.css');

        return parent::Field($properties);
    }

    /**
     * @return array|scalar
     */
    public function getImageHeight()
    {
        return $this->imageHeight;
    }

    /**
     * @param array|scalar $imageHeight
     * @return ImageOptionsetField
     */
    public function setImageHeight($imageHeight)
    {
        $this->imageHeight = $imageHeight;

        return $this;
    }

    /**
     * @return array|scalar
     */
    public function getImageWidth()
    {
        return $this->imageWidth;
    }

    /**
     * @param array|scalar $imageWidth
     * @return ImageOptionsetField
     */
    public function setImageWidth($imageWidth)
    {
        $this->imageWidth = $imageWidth;

        return $this;
    }


}