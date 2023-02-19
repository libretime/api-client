<?php
/**
 * ShowInstance
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
 * OpenAPI Generator version: 6.4.0
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
 * ShowInstance Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ShowInstance implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ShowInstance';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'created_at' => '\DateTime',
        'starts_at' => '\DateTime',
        'ends_at' => '\DateTime',
        'filled_time' => 'string',
        'last_scheduled_at' => '\DateTime',
        'description' => 'string',
        'modified' => 'bool',
        'rebroadcast' => 'int',
        'auto_playlist_built' => 'bool',
        'record_enabled' => '\Libretime\Client\Model\PatchedShowDaysRecordEnabled',
        'show' => 'int',
        'instance' => 'int',
        'record_file' => 'int'
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
        'created_at' => 'date-time',
        'starts_at' => 'date-time',
        'ends_at' => 'date-time',
        'filled_time' => null,
        'last_scheduled_at' => 'date-time',
        'description' => null,
        'modified' => null,
        'rebroadcast' => null,
        'auto_playlist_built' => null,
        'record_enabled' => null,
        'show' => null,
        'instance' => null,
        'record_file' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
		'created_at' => false,
		'starts_at' => false,
		'ends_at' => false,
		'filled_time' => true,
		'last_scheduled_at' => true,
		'description' => true,
		'modified' => false,
		'rebroadcast' => true,
		'auto_playlist_built' => false,
		'record_enabled' => true,
		'show' => false,
		'instance' => true,
		'record_file' => true
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
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
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
        'created_at' => 'created_at',
        'starts_at' => 'starts_at',
        'ends_at' => 'ends_at',
        'filled_time' => 'filled_time',
        'last_scheduled_at' => 'last_scheduled_at',
        'description' => 'description',
        'modified' => 'modified',
        'rebroadcast' => 'rebroadcast',
        'auto_playlist_built' => 'auto_playlist_built',
        'record_enabled' => 'record_enabled',
        'show' => 'show',
        'instance' => 'instance',
        'record_file' => 'record_file'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'created_at' => 'setCreatedAt',
        'starts_at' => 'setStartsAt',
        'ends_at' => 'setEndsAt',
        'filled_time' => 'setFilledTime',
        'last_scheduled_at' => 'setLastScheduledAt',
        'description' => 'setDescription',
        'modified' => 'setModified',
        'rebroadcast' => 'setRebroadcast',
        'auto_playlist_built' => 'setAutoPlaylistBuilt',
        'record_enabled' => 'setRecordEnabled',
        'show' => 'setShow',
        'instance' => 'setInstance',
        'record_file' => 'setRecordFile'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'created_at' => 'getCreatedAt',
        'starts_at' => 'getStartsAt',
        'ends_at' => 'getEndsAt',
        'filled_time' => 'getFilledTime',
        'last_scheduled_at' => 'getLastScheduledAt',
        'description' => 'getDescription',
        'modified' => 'getModified',
        'rebroadcast' => 'getRebroadcast',
        'auto_playlist_built' => 'getAutoPlaylistBuilt',
        'record_enabled' => 'getRecordEnabled',
        'show' => 'getShow',
        'instance' => 'getInstance',
        'record_file' => 'getRecordFile'
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
        $this->setIfExists('created_at', $data ?? [], null);
        $this->setIfExists('starts_at', $data ?? [], null);
        $this->setIfExists('ends_at', $data ?? [], null);
        $this->setIfExists('filled_time', $data ?? [], null);
        $this->setIfExists('last_scheduled_at', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('modified', $data ?? [], null);
        $this->setIfExists('rebroadcast', $data ?? [], null);
        $this->setIfExists('auto_playlist_built', $data ?? [], null);
        $this->setIfExists('record_enabled', $data ?? [], null);
        $this->setIfExists('show', $data ?? [], null);
        $this->setIfExists('instance', $data ?? [], null);
        $this->setIfExists('record_file', $data ?? [], null);
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

        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['created_at'] === null) {
            $invalidProperties[] = "'created_at' can't be null";
        }
        if ($this->container['starts_at'] === null) {
            $invalidProperties[] = "'starts_at' can't be null";
        }
        if ($this->container['ends_at'] === null) {
            $invalidProperties[] = "'ends_at' can't be null";
        }
        if (!is_null($this->container['description']) && (mb_strlen($this->container['description']) > 8192)) {
            $invalidProperties[] = "invalid value for 'description', the character length must be smaller than or equal to 8192.";
        }

        if ($this->container['modified'] === null) {
            $invalidProperties[] = "'modified' can't be null";
        }
        if (!is_null($this->container['rebroadcast']) && ($this->container['rebroadcast'] > 32767)) {
            $invalidProperties[] = "invalid value for 'rebroadcast', must be smaller than or equal to 32767.";
        }

        if (!is_null($this->container['rebroadcast']) && ($this->container['rebroadcast'] < -32768)) {
            $invalidProperties[] = "invalid value for 'rebroadcast', must be bigger than or equal to -32768.";
        }

        if ($this->container['auto_playlist_built'] === null) {
            $invalidProperties[] = "'auto_playlist_built' can't be null";
        }
        if ($this->container['show'] === null) {
            $invalidProperties[] = "'show' can't be null";
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
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
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
     * Gets created_at
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->container['created_at'];
    }

    /**
     * Sets created_at
     *
     * @param \DateTime $created_at created_at
     *
     * @return self
     */
    public function setCreatedAt($created_at)
    {
        if (is_null($created_at)) {
            throw new \InvalidArgumentException('non-nullable created_at cannot be null');
        }
        $this->container['created_at'] = $created_at;

        return $this;
    }

    /**
     * Gets starts_at
     *
     * @return \DateTime
     */
    public function getStartsAt()
    {
        return $this->container['starts_at'];
    }

    /**
     * Sets starts_at
     *
     * @param \DateTime $starts_at starts_at
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
     * Gets ends_at
     *
     * @return \DateTime
     */
    public function getEndsAt()
    {
        return $this->container['ends_at'];
    }

    /**
     * Sets ends_at
     *
     * @param \DateTime $ends_at ends_at
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
     * Gets filled_time
     *
     * @return string|null
     */
    public function getFilledTime()
    {
        return $this->container['filled_time'];
    }

    /**
     * Sets filled_time
     *
     * @param string|null $filled_time filled_time
     *
     * @return self
     */
    public function setFilledTime($filled_time)
    {
        if (is_null($filled_time)) {
            array_push($this->openAPINullablesSetToNull, 'filled_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('filled_time', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['filled_time'] = $filled_time;

        return $this;
    }

    /**
     * Gets last_scheduled_at
     *
     * @return \DateTime|null
     */
    public function getLastScheduledAt()
    {
        return $this->container['last_scheduled_at'];
    }

    /**
     * Sets last_scheduled_at
     *
     * @param \DateTime|null $last_scheduled_at last_scheduled_at
     *
     * @return self
     */
    public function setLastScheduledAt($last_scheduled_at)
    {
        if (is_null($last_scheduled_at)) {
            array_push($this->openAPINullablesSetToNull, 'last_scheduled_at');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('last_scheduled_at', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['last_scheduled_at'] = $last_scheduled_at;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description description
     *
     * @return self
     */
    public function setDescription($description)
    {
        if (is_null($description)) {
            array_push($this->openAPINullablesSetToNull, 'description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('description', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($description) && (mb_strlen($description) > 8192)) {
            throw new \InvalidArgumentException('invalid length for $description when calling ShowInstance., must be smaller than or equal to 8192.');
        }

        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets modified
     *
     * @return bool
     */
    public function getModified()
    {
        return $this->container['modified'];
    }

    /**
     * Sets modified
     *
     * @param bool $modified modified
     *
     * @return self
     */
    public function setModified($modified)
    {
        if (is_null($modified)) {
            throw new \InvalidArgumentException('non-nullable modified cannot be null');
        }
        $this->container['modified'] = $modified;

        return $this;
    }

    /**
     * Gets rebroadcast
     *
     * @return int|null
     */
    public function getRebroadcast()
    {
        return $this->container['rebroadcast'];
    }

    /**
     * Sets rebroadcast
     *
     * @param int|null $rebroadcast rebroadcast
     *
     * @return self
     */
    public function setRebroadcast($rebroadcast)
    {
        if (is_null($rebroadcast)) {
            array_push($this->openAPINullablesSetToNull, 'rebroadcast');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('rebroadcast', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($rebroadcast) && ($rebroadcast > 32767)) {
            throw new \InvalidArgumentException('invalid value for $rebroadcast when calling ShowInstance., must be smaller than or equal to 32767.');
        }
        if (!is_null($rebroadcast) && ($rebroadcast < -32768)) {
            throw new \InvalidArgumentException('invalid value for $rebroadcast when calling ShowInstance., must be bigger than or equal to -32768.');
        }

        $this->container['rebroadcast'] = $rebroadcast;

        return $this;
    }

    /**
     * Gets auto_playlist_built
     *
     * @return bool
     */
    public function getAutoPlaylistBuilt()
    {
        return $this->container['auto_playlist_built'];
    }

    /**
     * Sets auto_playlist_built
     *
     * @param bool $auto_playlist_built auto_playlist_built
     *
     * @return self
     */
    public function setAutoPlaylistBuilt($auto_playlist_built)
    {
        if (is_null($auto_playlist_built)) {
            throw new \InvalidArgumentException('non-nullable auto_playlist_built cannot be null');
        }
        $this->container['auto_playlist_built'] = $auto_playlist_built;

        return $this;
    }

    /**
     * Gets record_enabled
     *
     * @return \Libretime\Client\Model\PatchedShowDaysRecordEnabled|null
     */
    public function getRecordEnabled()
    {
        return $this->container['record_enabled'];
    }

    /**
     * Sets record_enabled
     *
     * @param \Libretime\Client\Model\PatchedShowDaysRecordEnabled|null $record_enabled record_enabled
     *
     * @return self
     */
    public function setRecordEnabled($record_enabled)
    {
        if (is_null($record_enabled)) {
            array_push($this->openAPINullablesSetToNull, 'record_enabled');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('record_enabled', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['record_enabled'] = $record_enabled;

        return $this;
    }

    /**
     * Gets show
     *
     * @return int
     */
    public function getShow()
    {
        return $this->container['show'];
    }

    /**
     * Sets show
     *
     * @param int $show show
     *
     * @return self
     */
    public function setShow($show)
    {
        if (is_null($show)) {
            throw new \InvalidArgumentException('non-nullable show cannot be null');
        }
        $this->container['show'] = $show;

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
            array_push($this->openAPINullablesSetToNull, 'instance');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('instance', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['instance'] = $instance;

        return $this;
    }

    /**
     * Gets record_file
     *
     * @return int|null
     */
    public function getRecordFile()
    {
        return $this->container['record_file'];
    }

    /**
     * Sets record_file
     *
     * @param int|null $record_file record_file
     *
     * @return self
     */
    public function setRecordFile($record_file)
    {
        if (is_null($record_file)) {
            array_push($this->openAPINullablesSetToNull, 'record_file');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('record_file', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['record_file'] = $record_file;

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


