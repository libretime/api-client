<?php
/**
 * PodcastEpisode
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
 * Generator version: 7.4.0
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
 * PodcastEpisode Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PodcastEpisode implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PodcastEpisode';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'published_at' => '\DateTime',
        'download_url' => 'string',
        'episode_guid' => 'string',
        'episode_title' => 'string',
        'episode_description' => 'string',
        'podcast' => 'int',
        'file' => 'int'
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
        'published_at' => 'date-time',
        'download_url' => null,
        'episode_guid' => null,
        'episode_title' => null,
        'episode_description' => null,
        'podcast' => null,
        'file' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
        'published_at' => false,
        'download_url' => false,
        'episode_guid' => false,
        'episode_title' => false,
        'episode_description' => false,
        'podcast' => false,
        'file' => true
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
        'published_at' => 'published_at',
        'download_url' => 'download_url',
        'episode_guid' => 'episode_guid',
        'episode_title' => 'episode_title',
        'episode_description' => 'episode_description',
        'podcast' => 'podcast',
        'file' => 'file'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'published_at' => 'setPublishedAt',
        'download_url' => 'setDownloadUrl',
        'episode_guid' => 'setEpisodeGuid',
        'episode_title' => 'setEpisodeTitle',
        'episode_description' => 'setEpisodeDescription',
        'podcast' => 'setPodcast',
        'file' => 'setFile'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'published_at' => 'getPublishedAt',
        'download_url' => 'getDownloadUrl',
        'episode_guid' => 'getEpisodeGuid',
        'episode_title' => 'getEpisodeTitle',
        'episode_description' => 'getEpisodeDescription',
        'podcast' => 'getPodcast',
        'file' => 'getFile'
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
        $this->setIfExists('published_at', $data ?? [], null);
        $this->setIfExists('download_url', $data ?? [], null);
        $this->setIfExists('episode_guid', $data ?? [], null);
        $this->setIfExists('episode_title', $data ?? [], null);
        $this->setIfExists('episode_description', $data ?? [], null);
        $this->setIfExists('podcast', $data ?? [], null);
        $this->setIfExists('file', $data ?? [], null);
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
        if ($this->container['published_at'] === null) {
            $invalidProperties[] = "'published_at' can't be null";
        }
        if ($this->container['download_url'] === null) {
            $invalidProperties[] = "'download_url' can't be null";
        }
        if ((mb_strlen($this->container['download_url']) > 4096)) {
            $invalidProperties[] = "invalid value for 'download_url', the character length must be smaller than or equal to 4096.";
        }

        if ($this->container['episode_guid'] === null) {
            $invalidProperties[] = "'episode_guid' can't be null";
        }
        if ((mb_strlen($this->container['episode_guid']) > 4096)) {
            $invalidProperties[] = "invalid value for 'episode_guid', the character length must be smaller than or equal to 4096.";
        }

        if ($this->container['episode_title'] === null) {
            $invalidProperties[] = "'episode_title' can't be null";
        }
        if ((mb_strlen($this->container['episode_title']) > 4096)) {
            $invalidProperties[] = "invalid value for 'episode_title', the character length must be smaller than or equal to 4096.";
        }

        if ($this->container['episode_description'] === null) {
            $invalidProperties[] = "'episode_description' can't be null";
        }
        if ($this->container['podcast'] === null) {
            $invalidProperties[] = "'podcast' can't be null";
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
     * Gets published_at
     *
     * @return \DateTime
     */
    public function getPublishedAt()
    {
        return $this->container['published_at'];
    }

    /**
     * Sets published_at
     *
     * @param \DateTime $published_at published_at
     *
     * @return self
     */
    public function setPublishedAt($published_at)
    {
        if (is_null($published_at)) {
            throw new \InvalidArgumentException('non-nullable published_at cannot be null');
        }
        $this->container['published_at'] = $published_at;

        return $this;
    }

    /**
     * Gets download_url
     *
     * @return string
     */
    public function getDownloadUrl()
    {
        return $this->container['download_url'];
    }

    /**
     * Sets download_url
     *
     * @param string $download_url download_url
     *
     * @return self
     */
    public function setDownloadUrl($download_url)
    {
        if (is_null($download_url)) {
            throw new \InvalidArgumentException('non-nullable download_url cannot be null');
        }
        if ((mb_strlen($download_url) > 4096)) {
            throw new \InvalidArgumentException('invalid length for $download_url when calling PodcastEpisode., must be smaller than or equal to 4096.');
        }

        $this->container['download_url'] = $download_url;

        return $this;
    }

    /**
     * Gets episode_guid
     *
     * @return string
     */
    public function getEpisodeGuid()
    {
        return $this->container['episode_guid'];
    }

    /**
     * Sets episode_guid
     *
     * @param string $episode_guid episode_guid
     *
     * @return self
     */
    public function setEpisodeGuid($episode_guid)
    {
        if (is_null($episode_guid)) {
            throw new \InvalidArgumentException('non-nullable episode_guid cannot be null');
        }
        if ((mb_strlen($episode_guid) > 4096)) {
            throw new \InvalidArgumentException('invalid length for $episode_guid when calling PodcastEpisode., must be smaller than or equal to 4096.');
        }

        $this->container['episode_guid'] = $episode_guid;

        return $this;
    }

    /**
     * Gets episode_title
     *
     * @return string
     */
    public function getEpisodeTitle()
    {
        return $this->container['episode_title'];
    }

    /**
     * Sets episode_title
     *
     * @param string $episode_title episode_title
     *
     * @return self
     */
    public function setEpisodeTitle($episode_title)
    {
        if (is_null($episode_title)) {
            throw new \InvalidArgumentException('non-nullable episode_title cannot be null');
        }
        if ((mb_strlen($episode_title) > 4096)) {
            throw new \InvalidArgumentException('invalid length for $episode_title when calling PodcastEpisode., must be smaller than or equal to 4096.');
        }

        $this->container['episode_title'] = $episode_title;

        return $this;
    }

    /**
     * Gets episode_description
     *
     * @return string
     */
    public function getEpisodeDescription()
    {
        return $this->container['episode_description'];
    }

    /**
     * Sets episode_description
     *
     * @param string $episode_description episode_description
     *
     * @return self
     */
    public function setEpisodeDescription($episode_description)
    {
        if (is_null($episode_description)) {
            throw new \InvalidArgumentException('non-nullable episode_description cannot be null');
        }
        $this->container['episode_description'] = $episode_description;

        return $this;
    }

    /**
     * Gets podcast
     *
     * @return int
     */
    public function getPodcast()
    {
        return $this->container['podcast'];
    }

    /**
     * Sets podcast
     *
     * @param int $podcast podcast
     *
     * @return self
     */
    public function setPodcast($podcast)
    {
        if (is_null($podcast)) {
            throw new \InvalidArgumentException('non-nullable podcast cannot be null');
        }
        $this->container['podcast'] = $podcast;

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


