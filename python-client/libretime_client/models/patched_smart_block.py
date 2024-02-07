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

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, StrictInt, StrictStr, constr
from libretime_client.models.patched_smart_block_kind import PatchedSmartBlockKind

class PatchedSmartBlock(BaseModel):
    """
    PatchedSmartBlock
    """
    id: Optional[StrictInt] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    name: Optional[constr(strict=True, max_length=255)] = None
    description: Optional[constr(strict=True, max_length=512)] = None
    length: Optional[StrictStr] = None
    kind: Optional[PatchedSmartBlockKind] = None
    owner: Optional[StrictInt] = None
    __properties = ["id", "created_at", "updated_at", "name", "description", "length", "kind", "owner"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> PatchedSmartBlock:
        """Create an instance of PatchedSmartBlock from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of kind
        if self.kind:
            _dict['kind'] = self.kind.to_dict()
        # set to None if created_at (nullable) is None
        # and __fields_set__ contains the field
        if self.created_at is None and "created_at" in self.__fields_set__:
            _dict['created_at'] = None

        # set to None if updated_at (nullable) is None
        # and __fields_set__ contains the field
        if self.updated_at is None and "updated_at" in self.__fields_set__:
            _dict['updated_at'] = None

        # set to None if description (nullable) is None
        # and __fields_set__ contains the field
        if self.description is None and "description" in self.__fields_set__:
            _dict['description'] = None

        # set to None if length (nullable) is None
        # and __fields_set__ contains the field
        if self.length is None and "length" in self.__fields_set__:
            _dict['length'] = None

        # set to None if kind (nullable) is None
        # and __fields_set__ contains the field
        if self.kind is None and "kind" in self.__fields_set__:
            _dict['kind'] = None

        # set to None if owner (nullable) is None
        # and __fields_set__ contains the field
        if self.owner is None and "owner" in self.__fields_set__:
            _dict['owner'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedSmartBlock:
        """Create an instance of PatchedSmartBlock from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedSmartBlock.parse_obj(obj)

        _obj = PatchedSmartBlock.parse_obj({
            "id": obj.get("id"),
            "created_at": obj.get("created_at"),
            "updated_at": obj.get("updated_at"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "length": obj.get("length"),
            "kind": PatchedSmartBlockKind.from_dict(obj.get("kind")) if obj.get("kind") is not None else None,
            "owner": obj.get("owner")
        })
        return _obj

