<?php
/**
 * PatchedSchedule
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
 * OpenAPI Generator version: 6.1.1-SNAPSHOT
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
 * PatchedSchedule Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PatchedSchedule implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedSchedule';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'cue_out' => 'string',
        'ends_at' => '\DateTime',
        'starts_at' => '\DateTime',
        'length' => 'string',
        'fade_in' => 'string',
        'fade_out' => 'string',
        'cue_in' => 'string',
        'position' => 'int',
        'position_status' => 'PositionStatusEnum',
        'broadcasted' => 'int',
        'played' => 'bool',
        'instance' => 'int',
        'file' => 'int',
        'stream' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'cue_out' => null,
        'ends_at' => 'date-time',
        'starts_at' => 'date-time',
        'length' => null,
        'fade_in' => 'time',
        'fade_out' => 'time',
        'cue_in' => null,
        'position' => null,
        'position_status' => null,
        'broadcasted' => null,
        'played' => null,
        'instance' => null,
        'file' => null,
        'stream' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
		'cue_out' => false,
		'ends_at' => false,
		'starts_at' => false,
		'length' => true,
		'fade_in' => true,
		'fade_out' => true,
		'cue_in' => false,
		'position' => false,
		'position_status' => false,
		'broadcasted' => false,
		'played' => true,
		'instance' => false,
		'file' => true,
		'stream' => true
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

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
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
        'cue_out' => 'cue_out',
        'ends_at' => 'ends_at',
        'starts_at' => 'starts_at',
        'length' => 'length',
        'fade_in' => 'fade_in',
        'fade_out' => 'fade_out',
        'cue_in' => 'cue_in',
        'position' => 'position',
        'position_status' => 'position_status',
        'broadcasted' => 'broadcasted',
        'played' => 'played',
        'instance' => 'instance',
        'file' => 'file',
        'stream' => 'stream'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'cue_out' => 'setCueOut',
        'ends_at' => 'setEndsAt',
        'starts_at' => 'setStartsAt',
        'length' => 'setLength',
        'fade_in' => 'setFadeIn',
        'fade_out' => 'setFadeOut',
        'cue_in' => 'setCueIn',
        'position' => 'setPosition',
        'position_status' => 'setPositionStatus',
        'broadcasted' => 'setBroadcasted',
        'played' => 'setPlayed',
        'instance' => 'setInstance',
        'file' => 'setFile',
        'stream' => 'setStream'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'cue_out' => 'getCueOut',
        'ends_at' => 'getEndsAt',
        'starts_at' => 'getStartsAt',
        'length' => 'getLength',
        'fade_in' => 'getFadeIn',
        'fade_out' => 'getFadeOut',
        'cue_in' => 'getCueIn',
        'position' => 'getPosition',
        'position_status' => 'getPositionStatus',
        'broadcasted' => 'getBroadcasted',
        'played' => 'getPlayed',
        'instance' => 'getInstance',
        'file' => 'getFile',
        'stream' => 'getStream'
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
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('cue_out', $data ?? [], null);
        $this->setIfExists('ends_at', $data ?? [], null);
        $this->setIfExists('starts_at', $data ?? [], null);
        $this->setIfExists('length', $data ?? [], null);
        $this->setIfExists('fade_in', $data ?? [], null);
        $this->setIfExists('fade_out', $data ?? [], null);
        $this->setIfExists('cue_in', $data ?? [], null);
        $this->setIfExists('position', $data ?? [], null);
        $this->setIfExists('position_status', $data ?? [], null);
        $this->setIfExists('broadcasted', $data ?? [], null);
        $this->setIfExists('played', $data ?? [], null);
        $this->setIfExists('instance', $data ?? [], null);
        $this->setIfExists('file', $data ?? [], null);
        $this->setIfExists('stream', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['position']) && ($this->container['position'] > 2147483647)) {
            $invalidProperties[] = "invalid value for 'position', must be smaller than or equal to 2147483647.";
        }

        if (!is_null($this->container['position']) && ($this->container['position'] < -2147483648)) {
            $invalidProperties[] = "invalid value for 'position', must be bigger than or equal to -2147483648.";
        }

        if (!is_null($this->container['position_status']) && ($this->container['position_status'] > 32767)) {
            $invalidProperties[] = "invalid value for 'position_status', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['position_status']) && ($this->container['position_status'] < -32768)) {
            $invalidProperties[] = "invalid value for 'position_status', must be bigger than or equal to -32768.";
        }

        if (!is_null($this->container['broadcasted']) && ($this->container['broadcasted'] > 32767)) {
            $invalidProperties[] = "invalid value for 'broadcasted', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['broadcasted']) && ($this->container['broadcasted'] < -32768)) {
            $invalidProperties[] = "invalid value for 'broadcasted', must be bigger than or equal to -32768.";
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
     * Gets id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id id
     *
     * @return self
     */
    public function setId($id)
    {

        if (is_null($id)) {
            throw new \InvalidArgumentException('non-nullable id cannot be null');
        }

        $this->container['id'] = $id;

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

        if (is_null($cue_out)) {
            throw new \InvalidArgumentException('non-nullable cue_out cannot be null');
        }

        $this->container['cue_out'] = $cue_out;

        return $this;
    }

    /**
     * Gets ends_at
     *
     * @return \DateTime|null
     */
    public function getEndsAt()
    {
        return $this->container['ends_at'];
    }

    /**
     * Sets ends_at
     *
     * @param \DateTime|null $ends_at ends_at
     *
     * @return self
     */
    public function setEndsAt($ends_at)
    {

        if (is_null($ends_at)) {
            throw new \InvalidArgumentException('non-nullable ends_at cannot be null');
        }

        $this->container['ends_at'] = $ends_at;

        return $this;
    }

    /**
     * Gets starts_at
     *
     * @return \DateTime|null
     */
    public function getStartsAt()
    {
        return $this->container['starts_at'];
    }

    /**
     * Sets starts_at
     *
     * @param \DateTime|null $starts_at starts_at
     *
     * @return self
     */
    public function setStartsAt($starts_at)
    {

        if (is_null($starts_at)) {
            throw new \InvalidArgumentException('non-nullable starts_at cannot be null');
        }

        $this->container['starts_at'] = $starts_at;

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

        if (is_null($length)) {
            array_push($this->openAPINullablesSetToNull, 'length');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('length', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        $this->container['length'] = $length;

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

        if (is_null($fade_in)) {
            array_push($this->openAPINullablesSetToNull, 'fade_in');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fade_in', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

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

        if (is_null($fade_out)) {
            array_push($this->openAPINullablesSetToNull, 'fade_out');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fade_out', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        $this->container['fade_out'] = $fade_out;

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

        if (is_null($cue_in)) {
            throw new \InvalidArgumentException('non-nullable cue_in cannot be null');
        }

        $this->container['cue_in'] = $cue_in;

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
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedSchedule., must be smaller than or equal to 2147483647.');
        }
        if (!is_null($position) && ($position < -2147483648)) {
            throw new \InvalidArgumentException('invalid value for $position when calling PatchedSchedule., must be bigger than or equal to -2147483648.');
        }


        if (is_null($position)) {
            throw new \InvalidArgumentException('non-nullable position cannot be null');
        }

        $this->container['position'] = $position;

        return $this;
    }

    /**
     * Gets position_status
     *
     * @return PositionStatusEnum|null
     */
    public function getPositionStatus()
    {
        return $this->container['position_status'];
    }

    /**
     * Sets position_status
     *
     * @param PositionStatusEnum|null $position_status position_status
     *
     * @return self
     */
    public function setPositionStatus($position_status)
    {

        if (!is_null($position_status) && ($position_status > 32767)) {
            throw new \InvalidArgumentException('invalid value for $position_status when calling PatchedSchedule., must be smaller than or equal to 32767.');
        }
        if (!is_null($position_status) && ($position_status < -32768)) {
            throw new \InvalidArgumentException('invalid value for $position_status when calling PatchedSchedule., must be bigger than or equal to -32768.');
        }


        if (is_null($position_status)) {
            throw new \InvalidArgumentException('non-nullable position_status cannot be null');
        }

        $this->container['position_status'] = $position_status;

        return $this;
    }

    /**
     * Gets broadcasted
     *
     * @return int|null
     */
    public function getBroadcasted()
    {
        return $this->container['broadcasted'];
    }

    /**
     * Sets broadcasted
     *
     * @param int|null $broadcasted broadcasted
     *
     * @return self
     */
    public function setBroadcasted($broadcasted)
    {

        if (!is_null($broadcasted) && ($broadcasted > 32767)) {
            throw new \InvalidArgumentException('invalid value for $broadcasted when calling PatchedSchedule., must be smaller than or equal to 32767.');
        }
        if (!is_null($broadcasted) && ($broadcasted < -32768)) {
            throw new \InvalidArgumentException('invalid value for $broadcasted when calling PatchedSchedule., must be bigger than or equal to -32768.');
        }


        if (is_null($broadcasted)) {
            throw new \InvalidArgumentException('non-nullable broadcasted cannot be null');
        }

        $this->container['broadcasted'] = $broadcasted;

        return $this;
    }

    /**
     * Gets played
     *
     * @return bool|null
     */
    public function getPlayed()
    {
        return $this->container['played'];
    }

    /**
     * Sets played
     *
     * @param bool|null $played played
     *
     * @return self
     */
    public function setPlayed($played)
    {

        if (is_null($played)) {
            array_push($this->openAPINullablesSetToNull, 'played');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('played', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        $this->container['played'] = $played;

        return $this;
    }

    /**
     * Gets instance
     *
     * @return int|null
     */
    public function getInstance()
    {
        return $this->container['instance'];
    }

    /**
     * Sets instance
     *
     * @param int|null $instance instance
     *
     * @return self
     */
    public function setInstance($instance)
    {

        if (is_null($instance)) {
            throw new \InvalidArgumentException('non-nullable instance cannot be null');
        }

        $this->container['instance'] = $instance;

        return $this;
    }

    /**
     * Gets file
     *
     * @return int|null
     */
    public function getFile()
    {
        return $this->container['file'];
    }

    /**
     * Sets file
     *
     * @param int|null $file file
     *
     * @return self
     */
    public function setFile($file)
    {

        if (is_null($file)) {
            array_push($this->openAPINullablesSetToNull, 'file');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('file', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        $this->container['file'] = $file;

        return $this;
    }

    /**
     * Gets stream
     *
     * @return int|null
     */
    public function getStream()
    {
        return $this->container['stream'];
    }

    /**
     * Sets stream
     *
     * @param int|null $stream stream
     *
     * @return self
     */
    public function setStream($stream)
    {

        if (is_null($stream)) {
            array_push($this->openAPINullablesSetToNull, 'stream');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('stream', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        $this->container['stream'] = $stream;

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


