<?php
/**
 * PatchedSmartBlockCriteria
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
 * PatchedSmartBlockCriteria Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PatchedSmartBlockCriteria implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PatchedSmartBlockCriteria';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'group' => 'int',
        'criteria' => 'string',
        'condition' => 'string',
        'value' => 'string',
        'extra' => 'string',
        'block' => 'int'
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
        'group' => null,
        'criteria' => null,
        'condition' => null,
        'value' => null,
        'extra' => null,
        'block' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'id' => false,
		'group' => true,
		'criteria' => false,
		'condition' => false,
		'value' => false,
		'extra' => true,
		'block' => false
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
        'group' => 'group',
        'criteria' => 'criteria',
        'condition' => 'condition',
        'value' => 'value',
        'extra' => 'extra',
        'block' => 'block'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'group' => 'setGroup',
        'criteria' => 'setCriteria',
        'condition' => 'setCondition',
        'value' => 'setValue',
        'extra' => 'setExtra',
        'block' => 'setBlock'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'group' => 'getGroup',
        'criteria' => 'getCriteria',
        'condition' => 'getCondition',
        'value' => 'getValue',
        'extra' => 'getExtra',
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
        $this->setIfExists('id', $data ?? [], null);
        $this->setIfExists('group', $data ?? [], null);
        $this->setIfExists('criteria', $data ?? [], null);
        $this->setIfExists('condition', $data ?? [], null);
        $this->setIfExists('value', $data ?? [], null);
        $this->setIfExists('extra', $data ?? [], null);
        $this->setIfExists('block', $data ?? [], null);
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

        if (!is_null($this->container['group']) && ($this->container['group'] > 2147483647)) {
            $invalidProperties[] = "invalid value for 'group', must be smaller than or equal to 2147483647.";
        }

        if (!is_null($this->container['group']) && ($this->container['group'] < -2147483648)) {
            $invalidProperties[] = "invalid value for 'group', must be bigger than or equal to -2147483648.";
        }

        if (!is_null($this->container['criteria']) && (mb_strlen($this->container['criteria']) > 32)) {
            $invalidProperties[] = "invalid value for 'criteria', the character length must be smaller than or equal to 32.";
        }

        if (!is_null($this->container['condition']) && (mb_strlen($this->container['condition']) > 16)) {
            $invalidProperties[] = "invalid value for 'condition', the character length must be smaller than or equal to 16.";
        }

        if (!is_null($this->container['value']) && (mb_strlen($this->container['value']) > 512)) {
            $invalidProperties[] = "invalid value for 'value', the character length must be smaller than or equal to 512.";
        }

        if (!is_null($this->container['extra']) && (mb_strlen($this->container['extra']) > 512)) {
            $invalidProperties[] = "invalid value for 'extra', the character length must be smaller than or equal to 512.";
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
     * Gets group
     *
     * @return int|null
     */
    public function getGroup()
    {
        return $this->container['group'];
    }

    /**
     * Sets group
     *
     * @param int|null $group group
     *
     * @return self
     */
    public function setGroup($group)
    {
        if (is_null($group)) {
            array_push($this->openAPINullablesSetToNull, 'group');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('group', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($group) && ($group > 2147483647)) {
            throw new \InvalidArgumentException('invalid value for $group when calling PatchedSmartBlockCriteria., must be smaller than or equal to 2147483647.');
        }
        if (!is_null($group) && ($group < -2147483648)) {
            throw new \InvalidArgumentException('invalid value for $group when calling PatchedSmartBlockCriteria., must be bigger than or equal to -2147483648.');
        }

        $this->container['group'] = $group;

        return $this;
    }

    /**
     * Gets criteria
     *
     * @return string|null
     */
    public function getCriteria()
    {
        return $this->container['criteria'];
    }

    /**
     * Sets criteria
     *
     * @param string|null $criteria criteria
     *
     * @return self
     */
    public function setCriteria($criteria)
    {
        if (is_null($criteria)) {
            throw new \InvalidArgumentException('non-nullable criteria cannot be null');
        }
        if ((mb_strlen($criteria) > 32)) {
            throw new \InvalidArgumentException('invalid length for $criteria when calling PatchedSmartBlockCriteria., must be smaller than or equal to 32.');
        }

        $this->container['criteria'] = $criteria;

        return $this;
    }

    /**
     * Gets condition
     *
     * @return string|null
     */
    public function getCondition()
    {
        return $this->container['condition'];
    }

    /**
     * Sets condition
     *
     * @param string|null $condition condition
     *
     * @return self
     */
    public function setCondition($condition)
    {
        if (is_null($condition)) {
            throw new \InvalidArgumentException('non-nullable condition cannot be null');
        }
        if ((mb_strlen($condition) > 16)) {
            throw new \InvalidArgumentException('invalid length for $condition when calling PatchedSmartBlockCriteria., must be smaller than or equal to 16.');
        }

        $this->container['condition'] = $condition;

        return $this;
    }

    /**
     * Gets value
     *
     * @return string|null
     */
    public function getValue()
    {
        return $this->container['value'];
    }

    /**
     * Sets value
     *
     * @param string|null $value value
     *
     * @return self
     */
    public function setValue($value)
    {
        if (is_null($value)) {
            throw new \InvalidArgumentException('non-nullable value cannot be null');
        }
        if ((mb_strlen($value) > 512)) {
            throw new \InvalidArgumentException('invalid length for $value when calling PatchedSmartBlockCriteria., must be smaller than or equal to 512.');
        }

        $this->container['value'] = $value;

        return $this;
    }

    /**
     * Gets extra
     *
     * @return string|null
     */
    public function getExtra()
    {
        return $this->container['extra'];
    }

    /**
     * Sets extra
     *
     * @param string|null $extra extra
     *
     * @return self
     */
    public function setExtra($extra)
    {
        if (is_null($extra)) {
            array_push($this->openAPINullablesSetToNull, 'extra');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('extra', $nullablesSetToNull);
            if ($index !== FALSE) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($extra) && (mb_strlen($extra) > 512)) {
            throw new \InvalidArgumentException('invalid length for $extra when calling PatchedSmartBlockCriteria., must be smaller than or equal to 512.');
        }

        $this->container['extra'] = $extra;

        return $this;
    }

    /**
     * Gets block
     *
     * @return int|null
     */
    public function getBlock()
    {
        return $this->container['block'];
    }

    /**
     * Sets block
     *
     * @param int|null $block block
     *
     * @return self
     */
    public function setBlock($block)
    {
        if (is_null($block)) {
            throw new \InvalidArgumentException('non-nullable block cannot be null');
        }
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


