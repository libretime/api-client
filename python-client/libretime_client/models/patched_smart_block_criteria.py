# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictInt
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class PatchedSmartBlockCriteria(BaseModel):
    """
    PatchedSmartBlockCriteria
    """ # noqa: E501
    id: Optional[StrictInt] = None
    group: Optional[Annotated[int, Field(le=2147483647, strict=True, ge=-2147483648)]] = None
    criteria: Optional[Annotated[str, Field(strict=True, max_length=32)]] = None
    condition: Optional[Annotated[str, Field(strict=True, max_length=16)]] = None
    value: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    extra: Optional[Annotated[str, Field(strict=True, max_length=512)]] = None
    block: Optional[StrictInt] = None
    __properties: ClassVar[List[str]] = ["id", "group", "criteria", "condition", "value", "extra", "block"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PatchedSmartBlockCriteria from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * OpenAPI `readOnly` fields are excluded.
        """
        excluded_fields: Set[str] = set([
            "id",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # set to None if group (nullable) is None
        # and model_fields_set contains the field
        if self.group is None and "group" in self.model_fields_set:
            _dict['group'] = None

        # set to None if extra (nullable) is None
        # and model_fields_set contains the field
        if self.extra is None and "extra" in self.model_fields_set:
            _dict['extra'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PatchedSmartBlockCriteria from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "group": obj.get("group"),
            "criteria": obj.get("criteria"),
            "condition": obj.get("condition"),
            "value": obj.get("value"),
            "extra": obj.get("extra"),
            "block": obj.get("block")
        })
        return _obj


