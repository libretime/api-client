<?php
/**
 * PatchedPlaylistContent
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * LibreTime API
 *
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.0.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;

use \ArrayAccess;
use \Libretime\Client\ObjectSerializer;

/**
 * PatchedPlaylistContent Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class PatchedPlaylistContent implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedPlaylistContent';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'kind' => 'Kind1d2Enum',
        'position' => 'int',
        'offset' => 'double',
        'length' => 'string',
        'cue_in' => 'string',
        'cue_out' => 'string',
        'fade_in' => 'string',
        'fade_out' => 'string',
        'playlist' => 'string',
        'file' => 'string',
        'stream' => 'string',
        'block' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'item_url' => 'uri',
        'kind' => null,
        'position' => null,
        'offset' => 'double',
        'length' => null,
        'cue_in' => null,
        'cue_out' => null,
        'fade_in' => 'time',
        'fade_out' => 'time',
        'playlist' => 'uri',
        'file' => 'uri',
        'stream' => 'uri',
        'block' => 'uri'
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'item_url' => 'item_url',
        'kind' => 'kind',
        'position' => 'position',
        'offset' => 'offset',
        'length' => 'length',
        'cue_in' => 'cue_in',
        'cue_out' => 'cue_out',
        'fade_in' => 'fade_in',
        'fade_out' => 'fade_out',
        'playlist' => 'playlist',
        'file' => 'file',
        'stream' => 'stream',
        'block' => 'block'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'kind' => 'setKind',
        'position' => 'setPosition',
        'offset' => 'setOffset',
        'length' => 'setLength',
        'cue_in' => 'setCueIn',
        'cue_out' => 'setCueOut',
        'fade_in' => 'setFadeIn',
        'fade_out' => 'setFadeOut',
        'playlist' => 'setPlaylist',
        'file' => 'setFile',
        'stream' => 'setStream',
        'block' => 'setBlock'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'kind' => 'getKind',
        'position' => 'getPosition',
        'offset' => 'getOffset',
        'length' => 'getLength',
        'cue_in' => 'getCueIn',
        'cue_out' => 'getCueOut',
        'fade_in' => 'getFadeIn',
        'fade_out' => 'getFadeOut',
        'playlist' => 'getPlaylist',
        'file' => 'getFile',
        'stream' => 'getStream',
        'block' => 'getBlock'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['item_url'] = $data['item_url'] ?? null;
        $this->container['kind'] = $data['kind'] ?? null;
        $this->container['position'] = $data['position'] ?? null;
        $this->container['offset'] = $data['offset'] ?? null;
        $this->container['length'] = $data['length'] ?? null;
        $this->container['cue_in'] = $data['cue_in'] ?? null;
        $this->container['cue_out'] = $data['cue_out'] ?? null;
        $this->container['fade_in'] = $data['fade_in'] ?? null;
        $this->container['fade_out'] = $data['fade_out'] ?? null;
        $this->container['playlist'] = $data['playlist'] ?? null;
        $this->container['file'] = $data['file'] ?? null;
        $this->container['stream'] = $data['stream'] ?? null;
        $this->container['block'] = $data['block'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['kind']) && ($this->container['kind'] > 32767)) {
            $invalidProperties[] = "invalid value for 'kind', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['kind']) && ($this->container['kind'] < -32768)) {
            $invalidProperties[] = "invalid value for 'kind', must be bigger than or equal to -32768.";
        }

        if (!is_null($this->container['position']) && ($this->container['position'] > 2147483647)) {
            $invalidProperties[] = "invalid value for 'position', must be smaller than or equal to 2147483647.";
        }

        if (!is_null($this->container['position']) && ($this->container['position'] < -2147483648)) {
            $invalidProperties[] = "invalid value for 'position', must be bigger than or equal to -2147483648.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets item_url
     *
     * @return string|null
     */
    public function getItemUrl()
    {
        return $this->container['item_url'];
    }

    /**
     * Sets item_url
     *
     * @param string|null $item_url item_url
     *
     * @return self
     */
    public function setItemUrl($item_url)
    {
        $this->container['item_url'] = $item_url;

        return $this;
    }

    /**
     * Gets kind
     *
     * @return Kind1d2Enum|null
     */
    public function getKind()
    {
        return $this->container['kind'];
    }

    /**
     * Sets kind
     *
     * @param Kind1d2Enum|null $kind kind
     *
     * @return self
     */
    public function setKind($kind)
    {

        if (!is_null($kind) && ($kind > 32767)) {
            throw new \InvalidArgumentException('invalid value for $kind when calling PatchedPlaylistContent., must be smaller than or equal to 32767.');
        }
        if (!is_null($kind) && ($kind < -32768)) {
            throw new \InvalidArgumentException('invalid value for $kind when calling PatchedPlaylistContent., must be bigger than or equal to -32768.');
        }

        $this->container['kind'] = $kind;

        return $this;
    }

    /**
     * Gets position
     *
     * @return int|null
     */
    public function getPosition()
    {
        return $this->container['position'];
    }

    /**
     * Sets position
     *
     * @param int|null $position position
     *
     * @return self
     */
    public function setPosition($position)
    {

        if (!is_null($position) && ($position > 2147483647)) {
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedPlaylistContent., must be smaller than or equal to 2147483647.');
        }
        if (!is_null($position) && ($position < -2147483648)) {
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedPlaylistContent., must be bigger than or equal to -2147483648.');
        }

        $this->container['position'] = $position;

        return $this;
    }

    /**
     * Gets offset
     *
     * @return double|null
     */
    public function getOffset()
    {
        return $this->container['offset'];
    }

    /**
     * Sets offset
     *
     * @param double|null $offset offset
     *
     * @return self
     */
    public function setOffset($offset)
    {
        $this->container['offset'] = $offset;

        return $this;
    }

    /**
     * Gets length
     *
     * @return string|null
     */
    public function getLength()
    {
        return $this->container['length'];
    }

    /**
     * Sets length
     *
     * @param string|null $length length
     *
     * @return self
     */
    public function setLength($length)
    {
        $this->container['length'] = $length;

        return $this;
    }

    /**
     * Gets cue_in
     *
     * @return string|null
     */
    public function getCueIn()
    {
        return $this->container['cue_in'];
    }

    /**
     * Sets cue_in
     *
     * @param string|null $cue_in cue_in
     *
     * @return self
     */
    public function setCueIn($cue_in)
    {
        $this->container['cue_in'] = $cue_in;

        return $this;
    }

    /**
     * Gets cue_out
     *
     * @return string|null
     */
    public function getCueOut()
    {
        return $this->container['cue_out'];
    }

    /**
     * Sets cue_out
     *
     * @param string|null $cue_out cue_out
     *
     * @return self
     */
    public function setCueOut($cue_out)
    {
        $this->container['cue_out'] = $cue_out;

        return $this;
    }

    /**
     * Gets fade_in
     *
     * @return string|null
     */
    public function getFadeIn()
    {
        return $this->container['fade_in'];
    }

    /**
     * Sets fade_in
     *
     * @param string|null $fade_in fade_in
     *
     * @return self
     */
    public function setFadeIn($fade_in)
    {
        $this->container['fade_in'] = $fade_in;

        return $this;
    }

    /**
     * Gets fade_out
     *
     * @return string|null
     */
    public function getFadeOut()
    {
        return $this->container['fade_out'];
    }

    /**
     * Sets fade_out
     *
     * @param string|null $fade_out fade_out
     *
     * @return self
     */
    public function setFadeOut($fade_out)
    {
        $this->container['fade_out'] = $fade_out;

        return $this;
    }

    /**
     * Gets playlist
     *
     * @return string|null
     */
    public function getPlaylist()
    {
        return $this->container['playlist'];
    }

    /**
     * Sets playlist
     *
     * @param string|null $playlist playlist
     *
     * @return self
     */
    public function setPlaylist($playlist)
    {
        $this->container['playlist'] = $playlist;

        return $this;
    }

    /**
     * Gets file
     *
     * @return string|null
     */
    public function getFile()
    {
        return $this->container['file'];
    }

    /**
     * Sets file
     *
     * @param string|null $file file
     *
     * @return self
     */
    public function setFile($file)
    {
        $this->container['file'] = $file;

        return $this;
    }

    /**
     * Gets stream
     *
     * @return string|null
     */
    public function getStream()
    {
        return $this->container['stream'];
    }

    /**
     * Sets stream
     *
     * @param string|null $stream stream
     *
     * @return self
     */
    public function setStream($stream)
    {
        $this->container['stream'] = $stream;

        return $this;
    }

    /**
     * Gets block
     *
     * @return string|null
     */
    public function getBlock()
    {
        return $this->container['block'];
    }

    /**
     * Sets block
     *
     * @param string|null $block block
     *
     * @return self
     */
    public function setBlock($block)
    {
        $this->container['block'] = $block;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


