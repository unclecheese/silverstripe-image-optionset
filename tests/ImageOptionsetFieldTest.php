<?php

class ImageOptionsetFieldTest extends SapphireTest
{
    public function testItSetsDefaultImageWidthHeight()
    {
        Config::inst()->update('ImageOptionsetField', 'default_image_width', 300);
        Config::inst()->update('ImageOptionsetField', 'default_image_height', 400);

        $field = ImageOptionsetField::create('test');

        $this->assertEquals(300, $field->getImageWidth());
        $this->assertEquals(400, $field->getImageHeight());
    }

    public function testItSetsSourceWithJustImagePaths()
    {
        $field = ImageOptionsetField::create('test');
        $field->setSource([
            'one' => 'path/to/image.png',
            'two' => 'path/to/image2.png'
        ]);

        $source = $field->getSource();
        $this->assertEquals('', $source['one']);
        $this->assertEquals('', $source['two']);
    }

    public function testItThrowsIfAnImageKeyDoesntExist()
    {
        $this->setExpectedException('InvalidArgumentException');
        $field = ImageOptionsetField::create('test');
        $field->setSource([
            'one' => [
                'title' => 'Test'
            ],
            'two' => 'path/to/image2.png'
        ]);

    }

    public function testItSetsSourceWithImagesAndTitles()
    {
        $field = ImageOptionsetField::create('test');
        $field->setSource([
            'one' => [
                'title' => 'One',
                'image' => 'path/to/image.png'
            ],
            'two' => [
                'title' => 'Two',
                'image' => 'path/to/image2.png'
            ]
        ]);

        $source = $field->getSource();
        $this->assertEquals('One', $source['one']);
        $this->assertEquals('Two', $source['two']);
    }

    public function testItCreatesImages()
    {
        $field = ImageOptionsetField::create('test');
        $field->setSource([
            'one' => [
                'title' => 'One',
                'image' => dirname(__FILE__) . '/assets/template1.png'
            ]
        ]);

        $img = $field->ImageForItem('one');
        $this->assertInstanceOf('Image_Cached', $img);
    }
}